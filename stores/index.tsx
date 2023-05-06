import {
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import {
  reducer as EntityMoveReducer,
  type State as EntityMoveState,
} from "./EntityMoveReducer";
import {
  reducer as EntitySelectionReducer,
  type State as EntitySelectionState,
} from "./EntitySelectionReducer";

export interface Store {
  moves: EntityMoveState;
  selection: EntitySelectionState;
}

const rootReducer = combineReducers<Store>({
  moves: EntityMoveReducer,
  selection: EntitySelectionReducer,
});

const store = createStore(rootReducer);
export default store;
