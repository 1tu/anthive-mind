import { Cell, Point } from '@domain/Area';
import { GameAction } from '@domain/Game/Action';
import { IGoalAction } from '@domain/Mind/Goal/Action/Action.types';
import { IDisposable } from 'src/common/class/Disposable/Disposable.types';
import { Mother } from '@domain/Mother';
import { Ant } from '@domain/Mind/Ant';

export interface IGoal extends IDisposable {
  readonly actionList: IGoalAction[];
  readonly _target?: Cell;
  readonly target?: Cell;
  readonly targetDistance: number;
  readonly gameAction: GameAction;
}

export interface IGoalCtor {
  new(mother: Mother, ant: Ant): IGoal;
}

export interface IGoalNew {
  readonly actionList: IGoalAction[];
  readonly targetDistance: number;
  readonly gameAction: GameAction;
  readonly executor: Ant;
  readonly target: Cell;
}
