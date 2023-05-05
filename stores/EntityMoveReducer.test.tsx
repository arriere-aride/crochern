import {
  SeedMemoryEntity,
  SeedTargetEntity,
  seedLogEntity,
  seedMemoryEntity,
  seedTargetEntity,
} from "@@/seeds/EntityMove.seed";
import {
  reducer,
  initialState,
  ActionTypes,
  InMemoryEntity,
  State,
} from "./EntityMoveReducer";
import { expect, test } from "vitest";

interface TestSpec {
  given: string;
  should: string;
  actual: any;
  expected: any;
  withCustomCheck?: (a: any, b: any) => any;
}

const stashEntity: SeedMemoryEntity = seedMemoryEntity();
const stateWithHistory: State = {
  ...initialState,
  history: seedLogEntity() as State["history"],
};
const stateWithMemory: State = {
  ...initialState,
  memory: [seedMemoryEntity()] as State["memory"],
};
const targetEntity: SeedTargetEntity = seedTargetEntity();

function getMemoryLength(state: State): number {
  return state.memory.length;
}
function getHistoryLength(state: State): number {
  return state.history.length;
}
function getTargetLength(state: State): number {
  return state.target.length;
}

const tests: TestSpec[] = [
  {
    given: "no arguments",
    should: "return initial State",
    actual: reducer(),
    expected: initialState,
  },
  {
    given: "STASH:initial State and Entity as argument",
    should: "return state with stash",
    actual: getMemoryLength(
      reducer(initialState, {
        type: ActionTypes.STASH,
        entity: stashEntity,
      })
    ),
    expected: 1,
  },
  {
    given: "UNSTASH:stash not empty",
    should: "return empty stash",
    actual: getMemoryLength(
      reducer(
        {
          ...initialState,
          memory: [stashEntity as InMemoryEntity],
        },
        { type: ActionTypes.UNSTASH }
      )
    ),
    expected: 0,
  },
  {
    given: "STASH/LOG:initial State and Entity as argument",
    should: "log the stash action",
    actual: getHistoryLength(
      reducer(initialState, {
        type: ActionTypes.STASH,
        entity: stashEntity,
      })
    ),
    expected: 1,
  },
  {
    given: "UNSTASH/LOG:stash not empty",
    should: "log the unstash action",
    actual: getHistoryLength(
      reducer(stateWithHistory, {
        type: ActionTypes.UNSTASH,
        entity: stashEntity,
      })
    ),
    expected: 2,
  },
  {
    given: "PUSH: add entity to target",
    should: "put entity to target",
    actual: getTargetLength(
      reducer(stateWithMemory, {
        type: ActionTypes.PUSH,
        entity: stashEntity,
      })
    ),
    expected: 1,
  },
];

test.each(tests)("Given %s, it should %s", (current: TestSpec) => {
  const { actual, expected } = current;
  if (current.withCustomCheck != null) {
    return current.withCustomCheck(actual, expected);
  } else {
    expect(actual).toBe(expected);
  }
});
