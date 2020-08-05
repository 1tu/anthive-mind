import { Cell } from '@domain/Area';
import { EActionName } from '@domain/Game/Action';
import { IGoalAction } from '@domain/Mind/Goal/Action/Action.types';
import { Root } from '@domain/Root';
import { Ant } from '@domain/Mind/Ant';
import { computed } from 'mobx';

export abstract class GoalAction implements IGoalAction {
  abstract get end(): boolean;

  @computed get target() {
    const list = [...this._targetList];
    IS_DEV && console.error(`[GOAL ${this._unit.id}] next TARGET LIST`, list);
    while (list.length) {
      const target = this._targetPick(list);
      IS_DEV && console.error(`[GOAL ${this._unit.id}] next TARGET`, target);
      if (this.isTargetValid(target)) return target;
      else list.splice(list.indexOf(target), 1);
    }
    return;
  }

  abstract actionName(distance: number): EActionName;
  abstract isTargetValid(target?: Cell): boolean;

  protected abstract get _targetList(): Cell[];
  protected abstract _targetPick(list: Cell[]): Cell;

  constructor(protected _root: Root, protected _unit: Ant, protected _target: Cell) {}
}
