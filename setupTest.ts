import {
  SeedMemoryEntity,
  seedLogEntity,
  seedMemoryEntity,
} from "./seeds/EntityMove.seed";
import {
  State,
  initialState,
} from "./stores/EntityMoveReducer";

export interface TestSpec {
  given: string;
  should: string;
  actual: any;
  expected: any;
  withCustomCheck?: (a: any, b: any) => any;
}

export function getMemoryLength(
  state: State
): number {
  return state.memory.length;
}
export function getHistoryLength(
  state: State
): number {
  return state.history.length;
}
export function getTargetLength(
  state: State
): number {
  return state.target.length;
}

export const stashEntity: SeedMemoryEntity =
  seedMemoryEntity();
export const stateWithHistory: State = {
  ...initialState,
  history: seedLogEntity() as State["history"],
};
export const stateWithMemory: State = {
  ...initialState,
  memory: seedMemoryEntity() as State["memory"],
};

export const runTest = (tests: TestSpec[]) =>
  test.each(tests)(
    "Given %s, it should %s",
    (current: TestSpec) => {
      const { actual, expected } = current;
      if (current.withCustomCheck != null) {
        return current.withCustomCheck(
          actual,
          expected
        );
      } else {
        expect(actual).toBe(expected);
      }
    }
  );
