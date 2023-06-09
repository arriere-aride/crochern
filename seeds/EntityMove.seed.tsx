import { tools } from "@/data";
import {
  ArchivedEntity,
  InMemoryEntity,
  MoveActionTypes,
  TargetEntity,
} from "@/stores";
import { faker } from "@faker-js/faker";

export type SeedMemoryEntity = InMemoryEntity[];
export type SeedLogEntity = ArchivedEntity[];
export type SeedTargetEntity = TargetEntity[];

export function seedMemoryEntity(
  count: number = 1
): SeedMemoryEntity {
  const observerDate = faker.date.past();
  const entity = () => ({
    _id: faker.datatype.uuid(),
    label:
      faker.helpers.arrayElement(tools).label,
    entity:
      faker.helpers.arrayElement(tools).entity,
    createdAt: observerDate,
    updatedAt: observerDate,
    theme: {
      color: faker.color.rgb({ prefix: "#" }),
      backgroundColor: "transparent",
      strokeWidth: 2,
    },
  });
  return Array(count)
    .fill({})
    .map(() => entity());
}

export function seedLogEntity(
  count: number = 1
): SeedLogEntity {
  function seedDetails() {
    const hasDetails = Math.trunc(
      Math.random() * 2
    );
    if (hasDetails) {
      return {
        warning: faker.lorem.sentence(5),
        action: faker.helpers.arrayElement([
          MoveActionTypes.STASH,
          MoveActionTypes.UNSTASH,
          MoveActionTypes.NOTHING,
        ]),
        happenedAt: faker.date.past(),
      };
    }
    return {};
  }
  const entity = () => ({
    ...seedMemoryEntity()[0],
    archivedAt: faker.date.recent(),
    details: seedDetails(),
  });
  return Array(count)
    .fill({})
    .map(() => entity());
}

export function seedTargetEntity(
  count: number = 1
): SeedTargetEntity {
  const entity = () => ({
    ...seedMemoryEntity()[0],
    position: {
      x: Number(faker.address.latitude(90, 1, 1)),
      y: Number(
        faker.address.longitude(180, 1, 1)
      ),
    },
  });
  return Array(count)
    .fill({})
    .map(() => entity());
}
