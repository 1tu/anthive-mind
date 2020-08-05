import { TPlayerVariant } from '@domain/Area';

export class CM {
  ant?: TPlayerVariant;
  hive?: TPlayerVariant;
  food?: number;

  constructor(food?: number, ant?: number | null, hive?: number | null) {
    if (food) this.food = food;
    if (ant !== undefined) this.ant = ant === null ? 'stranger' : ant.toString();
    if (hive !== undefined) this.hive = hive === null ? 'stranger' : hive.toString();
  }
}
