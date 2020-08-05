import { Cell, IPointState, ISize, Pathfinder } from '@domain/Area';
import { ICell, IMap } from '@domain/Game';
import { Root } from '@domain/Root';
import flatten from 'lodash/flatten';
import { computed, observable } from 'mobx';

export class Area {
  pathfinder = new Pathfinder(this._root);

  @observable map: Cell[][] = [];
  @computed get list() {
    return flatten(this.map);
  }

  size: ISize = { width: 0, height: 0 };

  private _isInit = false;

  @computed get listFood() {
    return this.list.filter((c) => c.isFood);
  }
  @computed get listHive() {
    return this.list.filter((c) => c.isHiveMy);
  }
  @computed get listHiveWithFood() {
    return this.list.filter((c) => c.isHiveMyWithFood);
  }

  constructor(private _root: Root) {}

  input(map: IMap) {
    if (!this._isInit) this._init(map);
    else this._update(map);
  }

  cellGet(point: IPointState) {
    return this.map[point.y][point.x];
  }

  private _init(map: IMap) {
    this.size.width = (map.cells[0] || []).length;
    this.size.height = map.cells.length;
    this._fillMatrix(map.cells);
    this._isInit = true;
  }

  private _update(map: IMap) {
    for (let y = 0; y < this.size.height; y++) {
      const rowIn = map.cells[y];
      const rowOut = this.map[y];
      for (let x = 0; x < this.size.width; x++) rowOut[x].update(rowIn[x]);
    }
  }

  private _fillMatrix(input: ICell[][]) {
    for (let y = 0; y < this.size.height; y++) {
      const rowOut: Cell[] = [];
      for (let x = 0; x < this.size.width; x++) {
        rowOut.push(new Cell(this._root, { x, y }, input[y][x]));
      }
      this.map.push(rowOut);
    }
  }
}
