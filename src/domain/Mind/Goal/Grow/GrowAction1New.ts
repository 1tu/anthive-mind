import { Cell, Pathfinder } from '@domain/Area';
import { EActionName } from '@domain/Game/Action';
import { GoalActionNew } from '@domain/Mind/Goal/Action/ActionNew';
import { Mother } from '@domain/Mother';
import { computed } from 'mobx';
import { Ant } from '@domain/Mind/Ant';

export class GoalGrowAction1New extends GoalActionNew {
  @computed get end() {
    return this.executor.payload === 0;
  }

  actionName(distance: number): EActionName {
    return distance > 1 ? EActionName.MOVE : EActionName.UNLOAD;
  }

  isTargetValid(target?: Cell): boolean {
    return target?.isHiveMyFree;
  }

  @computed protected get _targetList() {
    const withFood = this._mother.area.listHiveWithFood;
    return withFood.length ? withFood : this._mother.area.listHive;
  }

  protected _targetPick(list: Cell[]) {
    return Pathfinder.closest(this.executor.point, list).target;
  }

  constructor(mother: Mother, executor: Ant, target: Cell) {
    super(mother, executor, target);
  }
}
