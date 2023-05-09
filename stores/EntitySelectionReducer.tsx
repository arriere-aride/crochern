import {
  Action,
  ActionTypes,
  State,
  TargetEntity,
} from "./EntitySelectionReducer.d";

export const initialState = {
  selection: [],
};

export function select(
  entity: TargetEntity,
  state: State
) {
  return { selection: [entity] };
}
export function deselect(state: State) {
  return { selection: [] };
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

export type { State };
