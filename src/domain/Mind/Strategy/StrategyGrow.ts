import { IGoal } from '@domain/Mind/Goal';
import { action, computed, observable } from 'mobx';
import { Cell } from '@domain/Area';
import { Strategy } from '@domain/Mind/Strategy/Strategy';
import { GoalGrow } from '@domain/Mind/Goal/Grow/Grow';
import { Ant } from '@domain/Mind';

export class StrategyGrow extends Strategy<Cell> {
  @computed get targetList() {
    return this._root.area.listFood;
  }

  _goalCreate(item: Cell): IGoal {
    return new GoalGrow(this._root, this, [item]);
  }

  _goalDeleteNeed(goal: IGoal) {
    return goal.actionIndex === 0;
  }

  @action
  end(goal: IGoal): void {
    const target = goal.targetAllocate!;
    const helpIndex = this.targetListHelp.indexOf(target);
    if (helpIndex !== -1) {
      console.error('EEEEEEEEEEE!!!!!!! END HELP', target);
      this.targetListHelp.splice(helpIndex, 1);
    }
    this.goalMap.delete(target);
    super.end(goal);
  }
}
