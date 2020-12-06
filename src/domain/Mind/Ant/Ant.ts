import { Disposable } from '@common/class/Disposable/Disposable';
import { Cell, Point, TAntId, Pathfinder } from '@domain/Area';
import { IAnt } from '@domain/Game';
import { Root } from '@domain/Root';
import { action, computed, observable } from 'mobx';

export class Ant extends Disposable {
  point: Point;
  @observable health!: number;
  @observable cargo!: number;

  @computed get canWalk() {
    return !!this._root.area.pathfinder.neighbours(this.point).length;
  }

  @computed get cell(): Cell {
    return this._root.area.cellGet(this.point);
  }

  constructor(private _root: Root, public id: TAntId, ant: IAnt) {
    super();
    this.point = new Point(ant.point);
    this.update(ant);
  }

  @action update(ant: IAnt) {
    this.point.update(ant.point);
    this.cargo = ant.cargo;
    this.health = ant.health;
  }

  distanceTo(point: Point) {
    return Pathfinder.manhattanDistance(this.point, point);
  }
}
