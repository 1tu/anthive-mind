import { IPointState, Pathfinder, TPlayerVariant } from '@domain/Area';
import { Point } from '@domain/Area/Point';
import { ICell } from '@domain/Game';
import { Ant } from '@domain/Mind';
import { Root } from '@domain/Root';
import { action, computed, observable } from 'mobx';

export class Cell {
  point: Point;

  @observable food?: number;
  @observable hive?: TPlayerVariant;
  @observable private _ant?: TPlayerVariant;
  @computed get ant(): Ant | TPlayerVariant | undefined {
    if (!this._ant) return;
    return this._ant === this._root.id ? this._root.population.dict[this._ant] : this._ant;
  }
  set ant(value: Ant | TPlayerVariant | undefined) {
    this._ant = value instanceof Ant ? this._root.id : value;
  }

  @computed get isAnt() {
    return !!this.ant;
  }
  @computed get isAntMy() {
    return this.isAnt && this.ant === this._root.id;
  }
  @computed get isHive() {
    return !!this.hive;
  }
  @computed get isHiveMy() {
    return this.isHive && this.hive === this._root.id;
  }
  @computed get isHiveMyFree() {
    return this.isHiveMy && !this._ant;
  }
  @computed get isHiveMyWithFood() {
    return this.isHiveMyFree && this.food! > 0;
  }
  @computed get isFood() {
    return !this.hive && !this.ant && this.food! > 0;
  }

  @computed get isWalkable() {
    return this.isPathfindable && !this.food;
  }
  @computed get isPathfindable() {
    return (this.hive ? this.hive === this._root.id : true) && !this._ant;
  }

  constructor(private _root: Root, point: IPointState, cell: ICell) {
    this.point = new Point(point);
    this.update(cell);
  }

  @action update(cell: ICell) {
    this.food = cell.food;
    this.ant = cell.ant;
    this.hive = cell.hive;
  }

  distanceTo(point: Point) {
    return Pathfinder.manhattanDistance(this.point, point);
  }
}
