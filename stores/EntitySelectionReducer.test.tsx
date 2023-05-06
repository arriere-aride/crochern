import { seedTargetEntity } from "@/seeds/EntityMove.seed";
import { TargetEntity } from "./EntityMoveReducer";
import {
  ActionTypes,
  State,
  initialState,
  reducer,
} from "./EntitySelectionReducer";

interface TestSpec {
  given: string;
  should: string;
  actual: any;
  expected: any;
  withCustomCheck?: (a: any, b: any) => any;
}

function getSelectionLength(state: State) {
  return state.selection.length;
}
const targetEntity: TargetEntity[] =
  seedTargetEntity();
const stateWithSelection: State = {
  selection: targetEntity,
};
const tests: TestSpec[] = [
  {
    given: "no arguments",
    should: "return initial State",
    actual: reducer(),
    expected: initialState,
  },
  {
    given: "an entity selected",
    should: "return selection with entity inside",
    actual: getSelectionLength(
      reducer(initialState, {
        type: ActionTypes.SELECT,
        entity: targetEntity[0],
      })
    ),
    expected: 1,
  },
  {
    given: "a state with entity selected",
    should: "empty selection",
    actual: getSelectionLength(
      reducer(stateWithSelection, {
        type: ActionTypes.DESELECT,
      })
    ),
    expected: 0,
  },
];

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
