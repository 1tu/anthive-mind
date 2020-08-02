import { Pathfinder } from '@domain/Area';
import { IGoalNew } from '@domain/Mind/Goal';
import { GoalGrowNew } from '@domain/Mind/Goal/Grow/GrowNew';
import { Mother } from '@domain/Mother';
import { autorun, computed, observable } from 'mobx';
import { Mind } from '@domain/Mind/Mind';

export class StrategyGrow {
  @computed get targetList() {
    return this._mother.area.listFood;
  }

  @computed get executorList() {
    return this._mind.list.filter((a) => a.payload < Mother.config.PAYLOAD_MAX);
  }

  @observable.ref _goalList: IGoalNew[];
  @computed get goalList(): IGoalNew[] {
    const executorList = [...this.executorList]
    return this.targetList.map(target => ({ target, closest: Pathfinder.closest(target.point, executorList) }))
      .sort((a, b) => a.closest.distance - b.closest.distance)
      .map((v) => {
        let ant = v.closest.target;
        const index = executorList.indexOf(ant);
        if (index !== -1) executorList.splice(index, 1);
        else ant = Pathfinder.closest(v.target.point, executorList).target;
        return ant ? new GoalGrowNew(this._mother, ant, v.target) : undefined;
      });
  }

  @computed get actionList() {
    return this.goalList.filter((g) => g).map((g) => g.gameAction);
  }

  constructor(private _mother: Mother, private _mind: Mind) {
    autorun(() => {
      this._goalList = this.goalList;
    })
  }
}
