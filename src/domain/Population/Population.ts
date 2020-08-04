import { Root } from '@domain/Root';
import { action, computed, observable } from 'mobx';
import { Ant } from '@domain/Mind';
import { IAnt } from '@domain/Game';
import difference from 'lodash/difference';

export class Population {
  @observable dict: { [id: string]: Ant } = {};
  private _isInit = false;

  @computed get list() {
    return Object.values(this.dict);
  }

  constructor(private _root: Root) {}

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
      else this.dict[antIn.id] = new Ant(this._root, antIn.id, antIn);
    });
    const listRemoveId = difference(Object.keys(this.dict), listInId);
    listRemoveId.forEach((id) => {
      this.dict[id].dispose();
      delete this.dict[id];
    });
  }

  private _fill(list: IAnt[]) {
    list.forEach((ant) => {
      this.dict[ant.id] = new Ant(this._root, ant.id, ant);
    });
  }
}
