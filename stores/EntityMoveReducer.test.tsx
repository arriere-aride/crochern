import * as setup from "@/setupTest";
import {
  ActionTypes,
  initialState,
  reducer,
} from "./EntityMoveReducer";

const tests: setup.TestSpec[] = [
  {
    given: "no arguments",
    should: "return initial State",
    actual: reducer(),
    expected: initialState,
  },
  {
    given:
      "STASH:initial State and Entity as argument",
    should: "return state with stash",
    actual: setup.getMemoryLength(
      reducer(initialState, {
        type: ActionTypes.STASH,
        entity: setup.stashEntity,
      })
    ),
    expected: 1,
  },
  {
    given: "UNSTASH:stash not empty",
    should: "return empty stash",
    actual: setup.getMemoryLength(
      reducer(
        {
          ...initialState,
          memory: setup.stashEntity,
        },
        { type: ActionTypes.UNSTASH }
      )
    ),
    expected: 0,
  },
  {
    given:
      "STASH/LOG:initial State and Entity as argument",
    should: "log the stash action",
    actual: setup.getHistoryLength(
      reducer(initialState, {
        type: ActionTypes.STASH,
        entity: setup.stashEntity,
      })
    ),
    expected: 1,
  },
  {
    given: "UNSTASH/LOG:stash not empty",
    should: "log the unstash action",
    actual: setup.getHistoryLength(
      reducer(setup.stateWithHistory, {
        type: ActionTypes.UNSTASH,
        entity: setup.stashEntity,
      })
    ),
    expected: 2,
  },
  {
    given: "PUSH: add entity to target",
    should: "put entity to target",
    actual: setup.getTargetLength(
      reducer(setup.stateWithMemory, {
        type: ActionTypes.PUSH,
        entity: setup.stashEntity,
      })
    ),
    expected: 1,
  },
];

setup.runTest(tests);
