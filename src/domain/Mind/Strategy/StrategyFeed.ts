import { IGoal } from '@domain/Mind/Goal';
import { Root } from '@domain/Root';
import { action, computed } from 'mobx';
import { Ant } from '@domain/Mind';
import { GoalFeed } from '@domain/Mind/Goal/Feed/Feed';
import { Strategy } from '@domain/Mind/Strategy/Strategy';

export class StrategyFeed extends Strategy<Ant> {
  static NEED = (current: number) => current < Root.config.HEALTH_MAX * 0.3;

  @computed get targetList() {
    return this._root.population.list.filter((a) => StrategyFeed.NEED(a.health));
  }

  _goalCreate(item: Ant): IGoal {
    return new GoalFeed(this._root, this, [], item);
  }

  _goalDeleteNeed(item: IGoal) {
    return false;
  }

  @action
  end(goal: IGoal): void {
    this.goalMap.delete(goal.unit!);
    super.end(goal);
  }
}
