import { TargetEntity } from "./EntityMoveReducer";

export interface State {
  selection: TargetEntity[];
}
export const initialState = {
  selection: [],
};

export enum ActionTypes {
  NOTHING = "NOTHING",
  SELECT = "SELECT",
  DESELECT = "DESELECT",
}

export function select(
  entity: TargetEntity,
  state: State
) {
  return { selection: [entity] };
}
export function deselect(state: State) {
  return { selection: [] };
}
export interface Action {
  type: ActionTypes;
  entity?: TargetEntity;
}

export function reducer(
  state: State = initialState,
  action: Action = { type: ActionTypes.NOTHING }
): State {
  switch (action.type) {
    case ActionTypes.SELECT:
      return action.entity
        ? select(action.entity, state)
        : state;
    case ActionTypes.DESELECT:
      return deselect(state);
    default:
      return state;
  }
}
