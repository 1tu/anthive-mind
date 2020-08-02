import { IAnt } from '@domain/Game';
import { IActionServer } from '@domain/Game/Action';
import { Ant } from '@domain/Mind';
import { StrategyFeed } from '@domain/Mind/Strategy/StrategyFeed';
import { StrategyGrow } from '@domain/Mind/Strategy/StrategyGrow';
import { Mother } from '@domain/Mother';
import difference from 'lodash/difference';
import { action, autorun, computed, getDependencyTree, observable } from 'mobx';

export class Mind {
  private _isInit = false;
  actionList: IActionServer[] = [];

  @observable dict: { [id: string]: Ant } = {};
  @computed get list() {
    return Object.values(this.dict);
  }

  strategyList = [new StrategyGrow(this._mother, this)];
  // strategyList = [new StrategyFeed(this._mother), new StrategyGrow(this._mother)];
  @computed get goalList() {
    return this.strategyList.map((s) => s._goalList).flat();
  }

  @computed get actionListComputed() {
    return this.strategyList.reduce((acc, s) => {
      acc.push(...s.actionList.map(a => a.toJSON()));
      return acc;
    }, [] as IActionServer[]);
  }

  constructor(private _mother: Mother) {
    autorun(() => {
      this.actionList = this.actionListComputed;
      if (IS_DEV) {
        const z = getDependencyTree(this, 'actionListComputed');
        console.log('ZZZ', z);
      }
    });
  }

  input(list: IAnt[]) {
    if (!this._isInit) this._init(list);
    else this._update(list);
  }

  private _init(list: IAnt[]) {
    this._fill(list);
    this._isInit = true;
  }

  @action
  private _update(list: IAnt[]) {
    const listInId = list.map((a) => a.id.toString());
    list.forEach((antIn) => {
      const antOut = this.dict[antIn.id];
      if (antOut) antOut.update(antIn);
      else this.dict[antIn.id] = new Ant(this._mother, antIn.id, antIn);
    });
    const listRemoveId = difference(Object.keys(this.dict), listInId);
    listRemoveId.forEach((id) => {
      this.dict[id].dispose();
      delete this.dict[id];
    });
  }

  private _fill(list: IAnt[]) {
    list.forEach((ant) => {
      this.dict[ant.id] = new Ant(this._mother, ant.id, ant);
    });
  }
}
