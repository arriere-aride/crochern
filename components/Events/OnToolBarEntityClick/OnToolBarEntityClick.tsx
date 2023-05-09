import { tools } from "@/data";
import store, {
  MoveActionTypes,
  TargetEntity,
} from "@/stores";

export interface OnToolBarEntityClick {
  index: number;
  e: React.MouseEvent<HTMLElement>;
}

export function OnToolBarEntityClick({
  index = 0,
  e,
}: OnToolBarEntityClick): boolean {
  e.preventDefault();
  const movableEntity: TargetEntity = {
    entity: tools[index].entity,
    _id: index.toString(),
    label: tools[index].label,
    position: { x: e.screenX, y: e.screenY },
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  store.dispatch({
    type: MoveActionTypes.STASH,
    entity: movableEntity,
  });
  return true;
}
