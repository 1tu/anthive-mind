import { Cell, IPointState, Pathfinder, Point } from '@domain/Area';
import { EActionName, GameAction } from '@domain/Game/Action';
import { Ant } from '@domain/Mind';
import { IGoalActionCtor } from '@domain/Mind/Goal/Action/Action.types';
import { IGoal } from '@domain/Mind/Goal/Goal.types';
import { Root } from '@domain/Root';
import { computed, observable, reaction, trace } from 'mobx';
import { IStrategy } from '@domain/Mind/Strategy/Strategy.types';
import { Disposable } from '@common/class/Disposable/Disposable';

export abstract class Goal extends Disposable implements IGoal {
  abstract get priority(): number;
  abstract get actionListCtor(): IGoalActionCtor[];

  @computed get actionList() {
    return this.unit && this.actionListCtor.map((Action, index) => new Action(this._root, this.unit!, this._targetList[index]));
  }

  get targetAllocate(): Cell | undefined {
    return this._targetList[0];
  }

  @observable unit?: Ant;

  @computed get target() {
    IS_DEV && trace();
    return this.action?.target;
  }

  actionIndex = 0;
  @computed protected get action() {
    if (!this.actionList) return;
    let index = this.actionIndex;
    while (this.actionList[index]?.end) {
      index++;
      this._log(`next ACTION ${index}`);
    }
    return this.actionList[(this.actionIndex = index)];
  }

  @computed get gameAction() {
    if (!this.unit || !this.action) return;
    if (!this._targetMove) return new GameAction(this.unit, EActionName.STAY);
    return new GameAction(this.unit, this.action.actionName(this.targetDistance), new Point(this._targetMove));
  }

  @computed get targetDistance() {
    return this.unit && this.target ? this.target.point.distanceTo(this.unit.point) : 0;
  }

  @computed protected get _targetMove() {
    const unit = this.unit;
    const target = this.target;
    if (!target || !unit) return;
    const { x, y } = Pathfinder.vector(unit.point, target.point);
    const temp: IPointState[] = [
      { x: Math.sign(x), y: 0 },
      { x: 0, y: Math.sign(y) },
    ];
    const xPrior = Math.abs(x) >= Math.abs(y);
    const moveList: IPointState[] = [xPrior ? temp.shift()! : temp.pop()!, temp.pop()!];
    const move = moveList.find((d) => {
      const point = { x: unit.point.x + d.x, y: unit.point.y + d.y };
      return this.target?.point.equal(point) || (this._root.area.pathfinder.pointValid(point) && this._root.area.cellGet(point).isWalkable);
    });
    if (move) return move;
    const path = this._root.area.pathfinder.find(unit.point, target.point);
    this._log(`PATH: ${JSON.stringify(path)}`);
    return path.length && Pathfinder.vector(unit.point, path[0]);
  }

  constructor(protected _root: Root, protected _strategy: IStrategy<any>, protected _targetList: Cell[], unit?: Ant) {
    super();
    this.unit = unit;
    this._log('STARTED');
    reaction(
      () => this.action,
      () => {
        if (this.actionIndex > 0) this.needHelp();
        if (this.actionList && this.actionIndex >= this.actionList.length) this.dispose();
      }
    );
  }

  dispose() {
    super.dispose();
    this._strategy.end(this);
    this._log('FINISH');
    this.unit = undefined;
  }

  needHelp(): void {
    // if ()
  }

  private _log(text: string) {
    IS_DEV && console.warn(`[${this.constructor.name} ${this.unit?.id}] ${text}`);
  }
}
