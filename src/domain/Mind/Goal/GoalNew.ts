import { Cell, IPointState, Pathfinder, Point } from '@domain/Area';
import { EActionName, GameAction } from '@domain/Game/Action';
import { Ant } from '@domain/Mind';
import { IGoalAction } from '@domain/Mind/Goal/Action/Action.types';
import { IGoalNew } from '@domain/Mind/Goal/Goal.types';
import { Mother } from '@domain/Mother';
import { computed } from 'mobx';

export abstract class GoalNew implements IGoalNew {
  abstract get actionList(): IGoalAction[];

  private _actionIndex = 0;
  @computed protected get action() {
    let index = this._actionIndex;
    while (this.actionList[index].end) {
      const nextIndex = index + 1;
      index = nextIndex < this.actionList.length ? nextIndex : 0;
      IS_DEV && console.warn(`[GOAL ${this.executor.id}] next ACTION`, index);
    }
    return this.actionList[this._actionIndex = index];
  }

  @computed get gameAction() {
    if (!this._targetMove) return new GameAction(this.executor, EActionName.STAY);
    return new GameAction(this.executor, this.action.actionName(this.targetDistance), new Point(this._targetMove));
  }

  @computed get targetDistance() {
    return this.target.point.distanceTo(this.executor.point) ?? -1;
  }

  @computed protected get _targetMove(): IPointState | undefined {
    const { x, y } = Pathfinder.vector(this.executor.point, this.target.point);
    const temp = [
      { x: Math.sign(x), y: 0 },
      { x: 0, y: Math.sign(y) },
    ];
    const xPrior = Math.abs(x) >= Math.abs(y);
    const moveList: IPointState[] = [xPrior ? temp.shift() : temp.pop(), temp.pop()];
    const move = moveList.find((d) => {
      const point = { x: this.executor.point.x + d.x, y: this.executor.point.y + d.y };
      return this.target.point.equal(point) || (this._mother.area.pathfinder.pointValid(point) && this._mother.area.cellGet(point).isWalkable);
    });
    if (move) return move;
    const path = this._mother.area.pathfinder.find(this.executor.point, this.target.point);
    IS_DEV && console.warn(`[PATH ${this.executor.id}]`, JSON.stringify(path));
    return path.length && Pathfinder.vector(this.executor.point, path[0]);
  }

  constructor(protected _mother: Mother, public executor: Ant, public target: Cell) { }
}
