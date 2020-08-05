import { Cell, Pathfinder } from '@domain/Area';
import { EActionName } from '@domain/Game/Action';
import { Ant } from '@domain/Mind';
import { GoalAction } from '@domain/Mind/Goal/Action/Action';
import { Root } from '@domain/Root';
import { computed } from 'mobx';

export class GoalWaitAction0 extends GoalAction {
  @computed get end() {
    return this._unit.point.equal(this._target.point);
  }

  actionName(distance: number): EActionName {
    return distance > 0 ? EActionName.MOVE : EActionName.STAY;
  }

  isTargetValid(target?: Cell): boolean {
    return !!target && !target.isHiveMy;
  }

  @computed protected get _targetList(): Cell[] {
    return this._unit.cell.isHiveMy
      ? this._root.area.pathfinder.neighbours(this._unit.point).map((p) => this._root.area.cellGet(p))
      : [this._target];
  }

  protected _targetPick(list: Cell[]) {
    return list[0];
  }
}
