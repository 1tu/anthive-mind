import { IStrategy } from '@domain/Mind/Strategy/Strategy.types';
import { action, computed, observable, reaction } from 'mobx';
import { IGoal } from '@domain/Mind';
import { Root } from '@domain/Root';
import xor from 'lodash/xor';

export abstract class Strategy<T> implements IStrategy<T> {
  @observable targetListHelp: T[] = [];
  abstract get targetList(): T[];
  @computed get targetListAll() {
    return this.targetList.concat(this.targetListHelp);
  }

  @observable goalMap = new Map<T, IGoal>();

  constructor(protected _root: Root) {
    reaction(
      () => this.targetListAll,
      (targetList) => {
        const targetListNow = Array.from(this.goalMap.keys());
        xor(targetListNow, targetList).forEach((t) => {
          if (this.goalMap.has(t)) {
            const goal = this.goalMap.get(t)!;
            if (this._goalDeleteNeed(goal)) {
              goal.dispose();
              this.goalMap.delete(t);
            }
          } else this.goalMap.set(t, this._goalCreate(t));
        });
      }
    );
  }

  abstract _goalCreate(item: T): IGoal;
  abstract _goalDeleteNeed(goal: IGoal): boolean;

  @action end(goal: IGoal): void {
    this._root.mind.allocator.end(goal);
  }

  @action needHelp(item: T) {
    this.targetListHelp.push(item);
  }
}
