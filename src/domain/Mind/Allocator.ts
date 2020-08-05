import { Root } from '@domain/Root';
import { IGoal } from '@domain/Mind/Goal';
import { action, observable, reaction, runInAction } from 'mobx';
import { Ant } from '@domain/Mind/Ant';
import { Pathfinder } from '@domain/Area';
import { Planner } from '@domain/Mind/Planner';
import difference from 'lodash/difference';
import { Executor } from '@domain/Mind/Executor';

interface IAllocatorInput {
  goalList: IGoal[];
  unitList: Ant[];
}

export class Allocator {
  @observable executorMap = new Map<IGoal, Executor>();

  constructor(private _root: Root, private _planner: Planner) {
    reaction(
      () => ({ unitList: this._root.population.list, goalList: this._planner.goalList } as IAllocatorInput),
      ({ unitList, goalList }) => {
        const unitBusyList = Array.from(this.executorMap.values()).reduce<Ant[]>((acc, e) => {
          e.unit && acc.push(e.unit);
          return acc;
        }, []);
        const unitFreeSet = new Set(difference(unitList, unitBusyList));
        // const unitDiedList = difference(unitBusyList, unitList); // TODO: ?!

        let goalIndex = 0;
        while (unitFreeSet.size && goalIndex < goalList.length) {
          const goal = goalList[goalIndex];
          goalIndex++;

          if (this.executorMap.has(goal)) {
            const executor = this.executorMap.get(goal)!;
            if (goal.actionIndex > 0 || !goal.targetAllocate) continue;
            else {
              const unit = Pathfinder.closest(goal.targetAllocate.point, Array.from(unitFreeSet), executor.unit).target;
              if (executor.unit !== unit) {
                if (executor.unit) unitFreeSet.add(executor.unit);
                unitFreeSet.delete(unit);
                runInAction(() => (executor.unit = unit));
              }
            }
          } else if (goal.unit) {
            if (unitFreeSet.has(goal.unit)) unitFreeSet.delete(goal.unit);
            else {
              const finded = Array.from(this.executorMap.values()).find((e) => e.unit?.id === goal.unit?.id);
              if (finded) this.executorMap.delete(finded.goal);
            }
            this.executorMap.set(goal, new Executor(this._root, goal, goal.unit));
          } else if (goal.targetAllocate) {
            const unit = Pathfinder.closest(goal.targetAllocate.point, Array.from(unitFreeSet)).target;
            unitFreeSet.delete(unit);
            this.executorMap.set(goal, new Executor(this._root, goal, unit));
          }
        }
      }
    );
  }

  @action
  end(goal: IGoal) {
    this.executorMap.delete(goal);
  }
}
