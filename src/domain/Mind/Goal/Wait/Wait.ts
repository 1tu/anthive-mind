import { Goal } from '@domain/Mind/Goal/Goal';
import { GoalWaitAction0 } from '@domain/Mind/Goal/Wait/WaitAction0';

export class GoalWait extends Goal {
  static ctorList = [GoalWaitAction0];

  get actionListCtor() {
    return GoalWait.ctorList;
  }
}
