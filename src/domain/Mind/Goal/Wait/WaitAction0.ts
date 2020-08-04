import { Cell, Pathfinder } from '@domain/Area';
import { EActionName } from '@domain/Game/Action';
import { Ant } from '@domain/Mind';
import { GoalAction } from '@domain/Mind/Goal/Action/Action';
import { Root } from '@domain/Root';
import { computed } from 'mobx';

export class GoalWaitAction0 extends GoalAction {
  @computed get end() {
    return false;
  }

  actionName(distance: number): EActionName {
    return distance > 0 ? EActionName.MOVE : EActionName.STAY;
  }

  isTargetValid(target?: Cell): boolean {
    return target && !target.isHiveMy;
  }

  @computed protected get _targetList(): Cell[] {
    return this._root.area.pathfinder
      .neighbours(this._ant.point)
      .map((p) => this._root.area.cellGet(p))
      .concat(this._root.area.cellGet(this._ant.point));
  }

  protected _targetPick(list: Cell[]) {
    return Pathfinder.closest(this._ant.point, list).target;
  }

  constructor(mother: Root, ant: Ant) {
    super(mother, ant);
  }
}
