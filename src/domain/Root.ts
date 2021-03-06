import { IInput } from '@domain/Game';
import { Area } from '@domain/Area';
import { Mind } from '@domain/Mind';
import { transaction } from 'mobx';
import { Population } from '@domain/Population/Population';

export class Root {
  static config = {
    CARGO_MAX: 9,
    HEALTH_MAX: 9,
  };

  tick = 0;
  id!: string;

  area = new Area(this);
  population = new Population(this);
  mind = new Mind(this);

  private _isInit = false;

  input(data: IInput) {
    console.warn('TURN START:', data.tick);
    if (!this._isInit) {
      this.id = data.id;
      this._isInit = true;
    }
    this.tick = data.tick;
    transaction(() => {
      this.area.input(data.canvas);
      this.population.input(data.ants);
    });
    const z = this.mind.actionList;
    console.warn('TURN END:', data.tick);
    return z;
  }
}
