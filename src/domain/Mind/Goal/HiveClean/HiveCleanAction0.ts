import { Cell } from '@domain/Area';
import { EActionName } from '@domain/Game/Action';
import { GoalAction } from '@domain/Mind/Goal/Action/Action';
import { Root } from '@domain/Root';
import { computed } from 'mobx';

export class GoalHiveCleanAction0 extends GoalAction {
  @computed get end() {
    return this._unit.payload === Root.config.PAYLOAD_MAX || this._targetList.length <= 1;
  }

  actionName(distance: number): EActionName {
    return distance > 1 ? EActionName.MOVE : EActionName.TAKE;
  }

  isTargetValid(target?: Cell) {
    return !!target && target.food! > 0;
  }

  @computed protected get _targetList() {
    return this._root.area.listHiveWithFood;
  }

  protected _targetPick(list: Cell[]) {
    const food = list.map((c) => c.food!);
    return list[food.indexOf(Math.min(...food))];
  }
}
