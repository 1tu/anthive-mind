import { Root } from '@domain/Root';
import { THeatValuer } from '@domain/Area/Heat/Heat.types';
import { computed } from 'mobx';
import range from 'lodash/range';
import { Cell, IPointState } from '@domain/Area';

export class Heat {
  static zoomOut(area: number[][], cfc: number) {
    if (!area.length) return [];
    const yLen = area.length,
      xLen = area[0].length,
      r = range(cfc);
    const result = [];
    for (let y = 0; y <= yLen; y += cfc) {
      const row = [];
      for (let x = 0; x <= xLen; x += cfc) {
        let value = 0;
        r.forEach((yd) => {
          const rowd = area[y + yd] ?? [];
          r.forEach((xd) => (value += rowd[x + xd] ?? 0));
        });
        row.push(value);
      }
      result.push(row);
    }
    return result;
  }

  static zoomIn<T>(area: T[][], point: IPointState, cfc: number) {
    const r = range(cfc);
    const result: T[][] = [];
    r.forEach((yd) => {
      const rowd = area[point.y + yd];
      if (!rowd) return;
      const row: T[] = [];
      r.forEach((xd) => {
        const celld = rowd[point.x + xd];
        if (celld != null) row.push(celld);
      });
      result.push(row);
    });
    return result;
  }

  static lowest(area: number[][]) {
    let min = 9999;
    let result: IPointState[] = [];
    area.forEach((row, y) =>
      row.forEach((v, x) => {
        if (v < min) {
          min = v;
          result = [{ x, y }];
        } else if (v === min) result.push({ x, y });
      })
    );
    return result;
  }

  @computed get areaZoom0() {
    return this._root.area.map.map((row) => row.map((c) => this._valuer(c)));
  }

  @computed get areaZoom1() {
    return Heat.zoomOut(this.areaZoom0, this._cfc);
  }

  @computed get areaZoom2() {
    return Heat.zoomOut(this.areaZoom1, this._cfc);
  }

  @computed get lowest() {
    const result: Cell[] = [];
    if (!this.areaZoom2.length) return result;
    const zoom2 = Heat.lowest(this.areaZoom2);
    zoom2.map((p2) => {
      const area1 = Heat.zoomIn(this.areaZoom1, p2, this._cfc);
      const zoom1 = Heat.lowest(area1);
      zoom1.map((p1) => {
        const area0 = Heat.zoomIn(this.areaZoom0, p1, this._cfc);
        const zoom0 = Heat.lowest(area0);
        zoom0.forEach((p0) => result.push(this._root.area.cellGet(p0)));
      });
    });
    return result;
  }

  constructor(private _root: Root, private _valuer: THeatValuer, private _cfc: number) {}
}
