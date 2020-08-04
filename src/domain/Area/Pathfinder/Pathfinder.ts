import { IPointState } from '@domain/Area';
import { Point } from '@domain/Area/Point';
import { Root } from '@domain/Root';
import { computed } from 'mobx';

export interface IPathfinderClosest<T> {
  distance: number;
  target: T;
}

export class Pathfinder {
  static backtrace(node: Node) {
    const path = [node.point];
    while (node.parent) {
      node = node.parent;
      path.push(node.point);
    }
    return path.reverse();
  }

  static vector(current: IPointState, target: IPointState): IPointState {
    return { x: target.x - current.x, y: target.y - current.y };
  }

  // linear movement - no diagonals - just cardinal directions (NSEW)
  static manhattanDistance(current: IPointState, target: IPointState) {
    const { x, y } = Pathfinder.vector(current, target);
    return Math.abs(x) + Math.abs(y);
  }

  // diagonal movement - assumes diag dist is 1, same as cardinals
  static diagonalDistance(current: IPointState, target: IPointState) {
    const { x, y } = Pathfinder.vector(current, target);
    return Math.max(Math.abs(x), Math.abs(y));
  }

  // diagonals are considered a little farther than cardinal directions
  // diagonal movement using Euclide (AC = sqrt(AB^2 + BC^2))
  // where AB = x2 - x1 and BC = y2 - y1 and AC will be [x3, y3]
  static euclideanDistance(current: IPointState, target: IPointState) {
    const { x, y } = Pathfinder.vector(current, target);
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }

  static closest<T extends { distanceTo(point: Point): number }>(start: Point, targetList: T[], targetCurrent?: T): IPathfinderClosest<T> {
    const distanceCurrent = targetCurrent?.distanceTo(start) ?? 9999;
    const distanceList = targetList.map((c) => c.distanceTo(start));
    const distanceMin = Math.min(...distanceList, distanceCurrent);
    return {
      distance: distanceMin,
      target: distanceMin === distanceCurrent ? targetCurrent! : targetList[distanceList.indexOf(distanceMin)],
    };
  }

  @computed get height() {
    return this._root.area.size.height;
  }
  @computed get width() {
    return this._root.area.size.width;
  }
  @computed get size() {
    return this.width * this.height;
  }

  constructor(private _root: Root) {}

  neighbours({ x, y }: IPointState): IPointState[] {
    const N = y - 1,
      S = y + 1,
      E = x + 1,
      W = x - 1,
      myN = N > -1 && this.canWalkHere(x, N),
      myS = S < this.height && this.canWalkHere(x, S),
      myE = E < this.width && this.canWalkHere(E, y),
      myW = W > -1 && this.canWalkHere(W, y),
      result = [];
    if (myN) result.push({ x: x, y: N });
    if (myE) result.push({ x: E, y: y });
    if (myS) result.push({ x: x, y: S });
    if (myW) result.push({ x: W, y: y });
    // result.push(this.<diagonalNeighbours / diagonalNeighboursFree>());
    return result;
  }

  // можно ходить по диагонали НО проскакивать сквозь щели по диагонали НЕЛЬЗЯ
  diagonalNeighbours(myN: number, myS: number, myE: number, myW: number, N: number, S: number, E: number, W: number) {
    if (myN) {
      if (myE && this.canWalkHere(E, N)) return { x: E, y: N };
      if (myW && this.canWalkHere(W, N)) return { x: W, y: N };
    }
    if (myS) {
      if (myE && this.canWalkHere(E, S)) return { x: E, y: S };
      if (myW && this.canWalkHere(W, S)) return { x: W, y: S };
    }
  }

  // можно ходить по диагонали и проскакивать сквозь щели по диагонали
  diagonalNeighboursFree(N: number, S: number, E: number, W: number) {
    const myN = N > -1;
    const myS = S < this.height;
    const myE = E < this.width;
    const myW = W > -1;
    if (myE) {
      if (myN && this.canWalkHere(E, N)) return { x: E, y: N };
      if (myS && this.canWalkHere(E, S)) return { x: E, y: S };
    }
    if (myW) {
      if (myN && this.canWalkHere(W, N)) return { x: W, y: N };
      if (myS && this.canWalkHere(W, S)) return { x: W, y: S };
    }
  }

  canWalkHere(x: number, y: number) {
    const cell = this._root.area.cellGet({ x, y });
    return cell?.isPathfindable;
  }

  pointValid(point: IPointState) {
    return 0 <= point.x && point.x < this.width && 0 <= point.y && point.y < this.height;
  }

  find(start: IPointState, end: IPointState) {
    const distanceFunction = Pathfinder.manhattanDistance;
    const mypathStart = new Node(start);
    const mypathEnd = new Node(end);
    const AStar: { [nodeId: string]: boolean } = {};
    const path = [mypathStart];
    let result: IPointState[] = [];

    while (path.length) {
      let max = this.size;
      let min = -1;
      for (let i = 0; i < path.length; i++) {
        if (path[i].f < max) {
          max = path[i].f;
          min = i;
        }
      }

      const node = path.splice(min, 1)[0];
      if (node.value === mypathEnd.value) {
        result = Pathfinder.backtrace(node).slice(1);
      } else {
        this.neighbours(node.point).forEach((point) => {
          const nodeNext = new Node(point, node);
          if (!AStar[nodeNext.value]) {
            nodeNext.g = node.g + distanceFunction(point, node.point);
            nodeNext.f = nodeNext.g + distanceFunction(point, mypathEnd.point);
            path.push(nodeNext);
            AStar[nodeNext.value] = true;
          }
        });
      }
    }
    return result;
  }
}

class Node {
  f = 0;
  g = 0;

  get value() {
    return `${this.point.x}|${this.point.y}`;
  }

  constructor(public point: IPointState, public parent?: Node) {}
}
