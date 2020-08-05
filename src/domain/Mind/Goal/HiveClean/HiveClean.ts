import { Ant } from '@domain/Mind';
import { Goal } from '@domain/Mind/Goal/Goal';
import { GoalHiveCleanAction0 } from '@domain/Mind/Goal/HiveClean/HiveCleanAction0';
import { GoalHiveCleanAction1 } from '@domain/Mind/Goal/HiveClean/HiveCleanAction1';
import { Root } from '@domain/Root';

export class GoalHiveClean extends Goal {
  static ctorList = [GoalHiveCleanAction0, GoalHiveCleanAction1];

  get priority() {
    return 40;
  }

  get actionListCtor() {
    return GoalHiveClean.ctorList;
  }
}
