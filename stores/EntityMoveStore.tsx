import { legacy_createStore as createStore } from "redux";
import { reducer } from "./EntityMoveReducer";

const store = createStore(reducer);
export default store;
