import { Entity } from "./EntityReducer";

export interface InMemoryEntity extends Entity {
  entity: JSX.Element | React.ReactNode;
  createdAt: Date;
  updatedAt: Date;
}

export interface ArchivedEntity
  extends InMemoryEntity {
  archivedAt: Date;
  details?: any;
}

export interface State {
  memory: InMemoryEntity[];
  history: ArchivedEntity[];
  target: TargetEntity[];
}

export enum ActionTypes {
  STASH = "STASH",
  UNSTASH = "UNSTASH",
  NOTHING = "NOTHING",
  FLUSH = "FLUSH",
  PUSH = "PUSH",
}
export interface Action {
  type: ActionTypes;
  entity?: any;
  position?: any;
}
