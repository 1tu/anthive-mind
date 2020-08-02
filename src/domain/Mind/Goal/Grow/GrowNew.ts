import { Cell } from '@domain/Area';
import { IGoalAction } from '@domain/Mind/Goal/Action/Action.types';
import { GoalNew } from '@domain/Mind/Goal/GoalNew';
import { GoalGrowAction0New } from '@domain/Mind/Goal/Grow/GrowAction0New';
import { GoalGrowAction1New } from '@domain/Mind/Goal/Grow/GrowAction1New';
import { Mother } from '@domain/Mother';
import { Ant } from '@domain/Mind/Ant';

export class GoalGrowNew extends GoalNew {
  actionList: IGoalAction[] = [new GoalGrowAction0New(this._mother, this.executor, this.target), new GoalGrowAction1New(this._mother, this.executor, this.target)];

  constructor(mother: Mother, ant: Ant, target: Cell) {
    super(mother, ant, target);
  }
}
