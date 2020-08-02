import { Cell } from '@domain/Area';
import { EActionName } from '@domain/Game/Action';
import { IGoalActionNew } from '@domain/Mind/Goal/Action/Action.types';
import { Mother } from '@domain/Mother';
import { Ant } from '@domain/Mind/Ant';
import { computed } from 'mobx';

export abstract class GoalActionNew implements IGoalActionNew {
  abstract get end(): boolean;

  @computed get target() {
    const list = [...this._targetList];
    IS_DEV && console.error(`[GOAL ${this.executor.id}] next TARGET LIST`, list);
    while (list.length) {
      const target = this._targetPick(list);
      IS_DEV && console.error(`[GOAL ${this.executor.id}] next TARGET`, target);
      if (this.isTargetValid(target)) return target;
      else list.splice(list.indexOf(target), 1);
    }
    return;
  }

  abstract actionName(distance: number): EActionName;
  abstract isTargetValid(target?: Cell): boolean;

  protected abstract get _targetList(): Cell[];
  protected abstract _targetPick(list: Cell[]): Cell;

  constructor(protected _mother: Mother, public executor: Ant, protected _target: Cell) {}
}
