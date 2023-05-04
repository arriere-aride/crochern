import {
  SlipSnitch,
  SingleCrochet,
  Chain,
  HalfDoubleCrochet,
  DoubleCrochet,
  TrebleCrochet,
  DoubleTrebleCrochet,
} from "@/components/RenderEntity";
import {
  ActionTypes,
  ArchivedEntity,
  InMemoryEntity,
  TargetEntity,
} from "@/stores/EntityMoveReducer";
import { faker } from "@faker-js/faker";
const entities = [
  { label: "Slip Snitch", entity: <SlipSnitch /> },
  { label: "Single Crochet", entity: <SingleCrochet /> },
  { label: "Chain", entity: <Chain /> },
  { label: "Half Double Crochet", entity: <HalfDoubleCrochet /> },
  { label: "Double Crochet", entity: <DoubleCrochet /> },
  { label: "Treble Crochet", entity: <TrebleCrochet /> },
  { label: "Double Treble Crochet", entity: <DoubleTrebleCrochet /> },
];

export type SeedMemoryEntity = InMemoryEntity | InMemoryEntity[];
export type SeedLogEntity = ArchivedEntity[];
export type SeedTargetEntity = TargetEntity[];

export function seedMemoryEntity(count?: number): SeedMemoryEntity {
  const observerDate = faker.date.past();
  const entity = () => ({
    _id: faker.datatype.uuid(),
    label: faker.helpers.arrayElement(entities).label,
    entity: faker.helpers.arrayElement(entities).entity,
    createdAt: observerDate,
    updatedAt: observerDate,
  });
  if (count == null || count < 1) {
    return entity();
  }
  return Array(count).fill(entity());
}

export function seedLogEntity(
  count: number = 1,
  entityCount: number = 1
): SeedLogEntity {
  function seedDetails() {
    const hasDetails = Math.trunc(Math.random() * 2);
    if (hasDetails) {
      return {
        warning: faker.lorem.sentence(5),
        action: faker.helpers.arrayElement([
          ActionTypes.STASH,
          ActionTypes.UNSTASH,
          ActionTypes.NOTHING,
        ]),
        happenedAt: faker.date.past(),
      };
    }
    return {};
  }
  const entity = () => ({
    data: seedMemoryEntity(entityCount) as SeedMemoryEntity,
    archivedAt: faker.date.recent(),
    details: seedDetails(),
  });
  return Array(count).fill(entity());
}

export function seedTargetEntity(
  count: number = 1,
  entityCount: number = 1
): SeedTargetEntity {
  const entity = () => ({
    data: seedMemoryEntity(entityCount) as SeedMemoryEntity,
    position: {
      x: faker.address.latitude(90, 1, 1),
      y: faker.address.longitude(180, 1, 1),
    },
  });
  return Array(count).fill(entity());
}
