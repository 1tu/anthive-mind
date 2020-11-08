import { Cell } from '@domain/Area';
import { EActionName } from '@domain/Game/Action';
import { GoalAction } from '@domain/Mind/Goal/Action/Action';
import { Root } from '@domain/Root';
import { computed } from 'mobx';

export class GoalGrowAction0 extends GoalAction {
  @computed get end() {
    return this._unit.payload === Root.config.PAYLOAD_MAX;
  }

  actionName(distance: number): EActionName {
    return distance > 1 ? EActionName.MOVE : EActionName.TAKE;
  }

  isTargetValid(target?: Cell): boolean {
    return true;
  }

  @computed protected get _targetList() {
    return [this._target];
  }

  protected _targetPick(list: Cell[]) {
    return list[0];
  }
}
