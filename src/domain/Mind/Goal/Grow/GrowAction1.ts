import { Cell, Pathfinder } from '@domain/Area';
import { EActionName } from '@domain/Game/Action';
import { GoalAction } from '@domain/Mind/Goal/Action/Action';
import { computed } from 'mobx';

export class GoalGrowAction1 extends GoalAction {
  @computed get end() {
    return this._unit.payload === 0;
  }

  actionName(distance: number): EActionName {
    return distance > 1 ? EActionName.MOVE : EActionName.UNLOAD;
  }

  isTargetValid(target?: Cell) {
    return !!target?.isHiveMyFree;
  }

  @computed protected get _targetList() {
    const withFood = this._root.area.listHiveWithFood;
    return withFood.length ? withFood : this._root.area.listHive;
  }

  protected _targetPick(list: Cell[]) {
    return Pathfinder.closest(this._unit.point, list).target;
  }
}
