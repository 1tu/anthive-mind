import { IGoalNew } from '@domain/Mind/Goal';
import { GoalGrowNew } from '@domain/Mind/Goal/Grow/GrowNew';
import { Mother } from '@domain/Mother';
import { computed } from 'mobx';

export class StrategyFeed {
  @computed get targetList() {
    return this._mother.area.listFood;
  }

  @computed get goalList(): IGoalNew[] {
    return this.targetList.map(c => new GoalGrowNew(this._mother, c));
  }

  @computed get actionList() {
    return this.goalList.filter(g => !g.executor).map(g => g.gameAction);
  }

  constructor(private _mother: Mother) {}
}
