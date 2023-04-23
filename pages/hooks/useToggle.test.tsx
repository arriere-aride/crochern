import { useToggle } from "./useToggle";
import { describe } from "riteway";

/**
 * Test useToggle effect
 * toggle will change boolean on use
 *
 * @group effects
 */
describe("useToggle", async (assert: any) => {
  const should = "set default states";
  assert({
    given: "no arguments",
    should,
    actual: useToggle(),
    expected: [false, () => false],
  });
  assert({
    given: "true",
    should,
    actual: useToggle(true),
    expected: [true, () => true],
  });
  assert({
    given: "false",
    should,
    actual: useToggle(false),
    expected: [false, () => false],
  });
});
