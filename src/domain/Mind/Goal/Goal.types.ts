import { Cell } from '@domain/Area';
import { GameAction } from '@domain/Game/Action';
import { IGoalAction } from '@domain/Mind/Goal/Action/Action.types';
import { Root } from '@domain/Root';
import { Ant } from '@domain/Mind/Ant';
import { IDisposable } from '@common/class/Disposable/Disposable.types';

export interface IGoalCtor {
  new (mother: Root, ant: Ant): IGoal;
}

export interface IGoal extends IDisposable {
  readonly targetAllocate?: Cell;
  readonly actionIndex: number;
  readonly gameAction?: GameAction;
  readonly targetDistance: number;
  readonly actionList?: IGoalAction[];
  readonly target?: Cell;
  unit?: Ant;

  needHelp(): void;
}
