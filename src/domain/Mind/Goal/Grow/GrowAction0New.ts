import { Cell, Pathfinder } from '@domain/Area';
import { EActionName } from '@domain/Game/Action';
import { GoalActionNew } from '@domain/Mind/Goal/Action/ActionNew';
import { Mother } from '@domain/Mother';
import { computed } from 'mobx';
import { Ant } from '@domain/Mind/Ant';

export class GoalGrowAction0New extends GoalActionNew {
  @computed get end() {
    return this.executor.payload === Mother.config.PAYLOAD_MAX || !this._targetList.length;
  }

  actionName(distance: number): EActionName {
    return distance > 1 ? EActionName.MOVE : EActionName.LOAD;
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

  constructor(mother: Mother, executor: Ant, target: Cell) {
    super(mother, executor, target);
  }
}
