import { InMemoryEntity } from "./EntityMoveReducer.d";

export interface TargetEntity
  extends InMemoryEntity {
  position: { x: number; y: number };
}

export interface State {
  selection: TargetEntity[];
}

export enum ActionTypes {
  NOTHING = "NOTHING",
  SELECT = "SELECT",
  DESELECT = "DESELECT",
}

export interface Action {
  type: ActionTypes;
  entity?: TargetEntity;
}
