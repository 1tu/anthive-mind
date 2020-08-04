import { EActionName } from '@domain/Game/Action';
import { Cell } from '@domain/Area';
import { Ant } from '@domain/Mind';
import { Root } from '@domain/Root';

export interface IGoalAction {
  readonly end: boolean;
  readonly target?: Cell;

  actionName(distance: number): EActionName;
  isTargetValid(target?: Cell): boolean;
}

export interface IGoalActionCtor {
  new (mother: Root, unit: Ant, target: Cell): IGoalAction;
}
