import { Disposable } from '@common/class/Disposable/Disposable';
import { Cell, Point, TAntId, Pathfinder } from '@domain/Area';
import { IAnt } from '@domain/Game';
import { Mother } from '@domain/Mother';
import { action, computed, observable } from 'mobx';

export class Ant extends Disposable {
  // _goal: IGoal;
  // @computed get goal(): IGoal {
  //   IS_DEV && trace();
  //   let GoalNext: IGoalCtor;
  //   if (GoalFeed.NEED(this.health, Mother.config.HEALTH_MAX, this._goal instanceof GoalFeed)) GoalNext = GoalFeed;
  //   else if (GoalGrow.NEED(this._mother, this, this._goal)) GoalNext = GoalGrow;
  //   else if (GoalHiveClean.NEED(this._mother, this, this._goal instanceof GoalHiveClean)) GoalNext = GoalHiveClean;
  //   else GoalNext = GoalWait;
  //   if (this._goal instanceof GoalNext) return this._goal;
  //   else {
  //     (this._goal as IGoal)?.dispose();
  //     this._goal = new GoalNext(this._mother, this);
  //     console.warn(`[next GOAL ${this.id}] ${this._goal.constructor.name}`);
  //     return this._goal;
  //   }
  // }

  point: Point;
  @observable health: number;
  @observable payload: number;

  @computed get canWalk() {
    return !!this._mother.area.pathfinder.neighbours(this.point).length;
  }

  @computed get cell(): Cell {
    return this._mother.area.cellGet(this.point);
  }

  @computed get execute() {
    return this._mother.mind.goalList.find(g => g.executor === this);
  }

  constructor(private _mother: Mother, public id: TAntId, ant: IAnt) {
    super();
    this.point = new Point(ant.point);
    this.update(ant);
  }

  @action update(ant: IAnt) {
    this.point.update(ant.point);
    this.payload = ant.payload;
    this.health = ant.health;
  }

  distanceTo(point: Point) {
    return Pathfinder.manhattanDistance(this.point, point);
  }
}
