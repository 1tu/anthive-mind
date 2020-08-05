import { Ant } from '@domain/Mind';
import { IGoalAction } from '@domain/Mind/Goal/Action/Action.types';
import { GoalFeedAction0 } from '@domain/Mind/Goal/Feed/FeedAction0';
import { GoalFeedAction1 } from '@domain/Mind/Goal/Feed/FeedAction1';
import { Goal } from '@domain/Mind/Goal/Goal';
import { Root } from '@domain/Root';
import { GoalGrowAction0 } from '@domain/Mind/Goal/Grow/GrowAction0';
import { GoalGrowAction1 } from '@domain/Mind/Goal/Grow/GrowAction1';

export class GoalFeed extends Goal {
  static DISTANCE_NO_UNLOAD = 1;
  static ctorList = [GoalFeedAction0, GoalFeedAction1];

  get priority() {
    return 100;
  }

  get actionListCtor() {
    return GoalFeed.ctorList;
  }
}
