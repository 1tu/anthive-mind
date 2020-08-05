import { Root } from '@domain/Root';
import { IGoal } from '@domain/Mind/Goal';
import { Ant } from '@domain/Mind/Ant';
import { computed, observable } from 'mobx';

export class Executor {
  @observable private _unit?: Ant;
  @computed get unit(): Ant | undefined {
    return this._unit;
  }
  set unit(value: Ant | undefined) {
    this._unit = value;
    this.goal.unit = value;
  }

  constructor(private _root: Root, public goal: IGoal, unit: Ant) {
    this.unit = unit;
  }
}
