import { IGoal } from '@domain/Mind/Goal';
import { Root } from '@domain/Root';
import { action, computed } from 'mobx';
import { Ant } from '@domain/Mind';
import { Strategy } from '@domain/Mind/Strategy/Strategy';
import { Pathfinder } from '@domain/Area';
import { GoalHiveClean } from '@domain/Mind/Goal/HiveClean/HiveClean';

export class StrategyHiveClean extends Strategy<Ant> {
  static NEED = (root: Root) => root.area.listHiveWithFood.length > 1;

  @computed get targetList() {
    const need = StrategyHiveClean.NEED(this._root);
    if (need) return [Pathfinder.closest(this._root.area.listHiveWithFood[0].point, this._root.population.list).target];
    return [];
  }

  _goalCreate(item: Ant): IGoal {
    return new GoalHiveClean(this._root, this, [], item);
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
