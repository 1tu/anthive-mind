import { Cell, Pathfinder } from '@domain/Area';
import { EActionName } from '@domain/Game/Action';
import { Ant } from '@domain/Mind';
import { GoalAction } from '@domain/Mind/Goal/Action/Action';
import { Root } from '@domain/Root';
import { computed } from 'mobx';

export class GoalFeedAction1 extends GoalAction {
  @computed get end() {
    return this._unit.health >= Root.config.HEALTH_MAX;
  }

  actionName(distance: number): EActionName {
    return distance > 1 ? EActionName.MOVE : EActionName.EAT;
  }

  isTargetValid(target?: Cell): boolean {
    return !!target?.isFood;
  }

  @computed protected get _targetList() {
    return this._root.area.listFood;
  }

  protected _targetPick(list: Cell[]) {
    return Pathfinder.closest(this._unit.point, list).target;
  }
}
