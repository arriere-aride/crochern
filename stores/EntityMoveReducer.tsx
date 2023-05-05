/**
 * EntityMoveReducer.tsx
 * Manage an entity movement through a stash
 * Given an entity move from ``point A`` to ``point B``
 *  - __stash__: Select entity from ``point A`` -> put it to stash & log entity stashing
 *  - __unstash__: Remove entity from stash
 *  - __log__: add to history array, permits undo && redo action (not implemented yet)
 *  - __push__: Select entity to ``point B`` -> put it to ``point B`` & log entity unstashing
 */

export interface InMemoryEntity {
  _id: string;
  label: string;
  entity: JSX.Element | React.ReactNode;
  createdAt: Date;
  updatedAt: Date;
}

export interface ArchivedEntity extends InMemoryEntity {
  archivedAt: Date;
  details?: any;
}
export interface TargetEntity extends InMemoryEntity {
  position: { x: number; y: number };
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

export const initialState = {
  memory: [],
  history: [],
  target: [],
};

export function stash(entity: InMemoryEntity, state: State): State {
  const stateWithLog = log(state.memory, state, {
    action: ActionTypes.STASH,
  });
  return { ...stateWithLog, memory: [entity] };
}

export function unstash(state: State): State {
  const stateWithLog = log(state.memory, state, {
    action: ActionTypes.UNSTASH,
  });
  return { ...stateWithLog, memory: [] };
}

export function push(position: { x: number; y: number }, state: State): State {
  const newTarget = state.memory.map((memory) => ({
    ...memory,
    position,
  }));
  return { ...state, target: [...state.target, ...newTarget] };
}

export function log(
  entity: InMemoryEntity | InMemoryEntity[],
  state: State,
  ...details: any
): State {
  const archivedEntity: ArchivedEntity = {
    ...(entity as InMemoryEntity),
    archivedAt: new Date(),
    details: details ?? {},
  };
  return { ...state, history: [...state.history, archivedEntity] };
}

export interface Action {
  type: ActionTypes;
  entity?: any;
  position?: any;
}

export function reducer(
  state: State = initialState,
  action: Action = { type: ActionTypes.NOTHING }
): State {
  switch (action.type) {
    case ActionTypes.STASH:
      return stash(action.entity, state);
    case ActionTypes.UNSTASH:
      return unstash(state);
    case ActionTypes.PUSH:
      return push(action.position, state);
    default:
      return state;
  }
}
