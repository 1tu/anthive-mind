import { IGoal } from '@domain/Mind';

export interface IStrategy<T> {
  readonly targetList: T[];
  readonly goalMap: Map<T, IGoal>;

  end(goal: IGoal): void;
}
