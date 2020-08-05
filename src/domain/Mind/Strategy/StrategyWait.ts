import { IGoal } from '@domain/Mind/Goal';
import { Root } from '@domain/Root';
import { action, computed, observable } from 'mobx';
import { Ant } from '@domain/Mind';
import { Strategy } from '@domain/Mind/Strategy/Strategy';
import { Cell, Pathfinder } from '@domain/Area';
import { GoalHiveClean } from '@domain/Mind/Goal/HiveClean/HiveClean';
import { Heat } from '@domain/Area/Heat';
import { GoalWait } from '@domain/Mind/Goal/Wait/Wait';

export class StrategyWait extends Strategy<Cell> {
  static NEED = (root: Root) => root.area.listHiveWithFood.length > 1;

  @observable heat = new Heat(this._root, (cell) => (cell.isWalkable ? 100 : 0), 2);

  @computed get targetList() {
    return this.heat.lowest;
    // return [];
  }

  _goalCreate(item: Cell): IGoal {
    return new GoalWait(this._root, this, [item]);
  }

  _goalDeleteNeed(goal: IGoal) {
    return goal.actionIndex === 0;
  }

  @action
  end(goal: IGoal): void {
    this.goalMap.delete(goal.targetAllocate!);
    super.end(goal);
  }
}
