import { Root } from '@domain/Root';
import { autorun, getDependencyTree } from 'mobx';
import { IActionServer } from '@domain/Game/Action';
import { Planner } from '@domain/Mind/Planner';
import { Allocator } from '@domain/Mind/Allocator';

export class Mind {
  actionList: IActionServer[] = [];

  planner = new Planner(this._root);
  allocator = new Allocator(this._root, this.planner);

  constructor(private _root: Root) {
    autorun(() => {
      this.actionList = Array.from(this.allocator.executorMap.values()).reduce<IActionServer[]>((acc, e) => {
        e.goal.gameAction && acc.push(e.goal.gameAction.toJSON());
        return acc;
      }, []);
    });
  }
}
