import difference from 'lodash/difference';
import { action, computed, observable } from 'mobx';
import { Ant } from '@domain/Mind';
import { Mother } from '@domain/Mother';
import { IAntList } from '@domain/Game';

export class Mind {
  private _isInit = false;

  @observable public dict: { [id: string]: Ant } = {};
  @computed public get list() {
    return Object.values(this.dict);
  }

  constructor(private _mother: Mother) {}

  input(list: IAntList) {
    if (!this._isInit) this._init(list);
    else this._update(list);
  }

  public getActions() {
    return this.list.reduce((acc, ant) => {
      acc[ant.id] = ant.goal.action.toJSON();
      return acc;
    }, {} as any);
  }

  private _init(list: IAntList) {
    this._fill(list);
    this._isInit = true;
  }

  @action
  private _update(list: IAntList) {
    const listInId = Object.keys(list);
    for (const antId of listInId) {
      const antIn = list[antId];
      const antOut = this.dict[antId];
      if (antOut) antOut.update(antIn);
      else this.dict[antId] = new Ant(this._mother, antId, antIn);
    }
    const listRemoveId = difference(Object.keys(this.dict), listInId);
    listRemoveId.forEach((id) => delete this.dict[id]);
  }

  @action
  private _fill(list: IAntList) {
    for (const antId in list) {
      const ant = list[antId];
      this.dict[antId] = new Ant(this._mother, antId, ant);
    }
  }
}
