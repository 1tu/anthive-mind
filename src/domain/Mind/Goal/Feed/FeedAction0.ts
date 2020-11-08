import { computed } from 'mobx';
import { Cell, Pathfinder } from '@domain/Area';
import { GoalFeed } from '@domain/Mind/Goal/Feed/Feed';
import { EActionName } from '@domain/Game/Action';
import { GoalAction } from '@domain/Mind/Goal/Action/Action';

export class GoalFeedAction0 extends GoalAction {
  @computed get end() {
    return (
      this._unit.payload === 0 || Pathfinder.closest(this._unit.point, this._root.area.listFood).distance <= GoalFeed.DISTANCE_NO_UNLOAD
    );
  }

  actionName(distance: number): EActionName {
    return EActionName.PUT;
  }

  isTargetValid(target?: Cell): boolean {
    return !!target && !target.isFood;
  }

  @computed protected get _targetList() {
    return this._root.area.pathfinder.neighbours(this._unit.point).map((p) => this._root.area.cellGet(p));
  }

  protected _targetPick(list: Cell[]) {
    return list[0];
  }
}
