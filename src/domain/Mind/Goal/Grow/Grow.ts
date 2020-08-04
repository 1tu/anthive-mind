import { Goal } from '@domain/Mind/Goal/Goal';
import { GoalGrowAction0 } from '@domain/Mind/Goal/Grow/GrowAction0';
import { GoalGrowAction1 } from '@domain/Mind/Goal/Grow/GrowAction1';

export class GoalGrow extends Goal {
  static ctorList = [GoalGrowAction0, GoalGrowAction1];

  get priority() {
    return 50;
  }

  get actionListCtor() {
    return GoalGrow.ctorList;
  }
}
