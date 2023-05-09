import {
  SeedTargetEntity,
  seedTargetEntity,
} from "@/seeds/EntityMove.seed";
import { TargetEntity } from "@/stores";
import { faker } from "@faker-js/faker";
import SelectGridEntity from "./SelectGridEntity";

interface TestSpec {
  given: string;
  should: string;
  actual: any;
  expected: any;
  withCustomCheck?: (a: any, b: any) => any;
}
const randomCount = Math.floor(
  Math.random() * 25
);
const targetEntities: SeedTargetEntity =
  seedTargetEntity(randomCount);
const selected: TargetEntity =
  faker.helpers.arrayElement(targetEntities);

const tests: TestSpec[] = [
  {
    given:
      "SELECT: entity id and list of entities",
    should: "return selected entity",
    actual: SelectGridEntity({
      id: selected._id,
      list: targetEntities,
    })?._id,
    expected: selected._id,
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
