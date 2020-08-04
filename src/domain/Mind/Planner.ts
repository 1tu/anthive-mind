import { Root } from '@domain/Root';
import { StrategyGrow } from '@domain/Mind/Strategy/StrategyGrow';
import { computed } from 'mobx';
import { IGoal } from '@domain/Mind/Goal';
import { StrategyFeed } from '@domain/Mind/Strategy/StrategyFeed';
import { StrategyHiveClean } from '@domain/Mind/Strategy/StrategyHiveClean';

export class Planner {
  strategyList = [new StrategyFeed(this._root), new StrategyHiveClean(this._root), new StrategyGrow(this._root)];

  @computed get goalList(): IGoal[] {
    return this.strategyList.map((s) => Array.from(s.goalMap.values())).flat();
  }

  constructor(private _root: Root) {}
}
