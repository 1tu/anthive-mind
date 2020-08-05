import { Cell, IPointState } from '@domain/Area';

export type THeatValuer = (cell: Cell) => number;
export interface IHeatData {
  point: IPointState;
  cell: Cell;
}
