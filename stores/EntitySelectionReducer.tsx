import _ from "lodash";
import {
  Action,
  ActionTypes,
  State,
  TargetEntity,
} from "./EntitySelectionReducer.d";

export const initialState = {
  selection: [],
};

export function select(entity: TargetEntity) {
  return { selection: [entity] };
}
export function deselect() {
  return { selection: [] };
}

export function update(
  updated: { path: string[]; value: any },
  state: State
) {
  const { path, value } = updated;
  return _.set(
    state,
    ["selection", "0", ...path],
    value
  );
}

export function reducer(
  state: State = initialState,
  action: Action = { type: ActionTypes.NOTHING }
): State {
  switch (action.type) {
    case ActionTypes.SELECT:
      return action.entity
        ? select(action.entity)
        : state;
    case ActionTypes.DESELECT:
      return deselect();
    case ActionTypes.UPDATE_SELECTED:
      return action.updated
        ? update(action.updated, state)
        : state;
    default:
      return state;
  }
}

export type { State };
