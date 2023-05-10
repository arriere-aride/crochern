import { tools } from "@/data";
import store, {
  EntityTheme,
  MoveActionTypes,
  TargetEntity,
} from "@/stores";

export interface OnToolBarEntityClick {
  index: number;
  theme?: EntityTheme;
  e: React.MouseEvent<HTMLElement>;
}

export function OnToolBarEntityClick({
  index = 0,
  theme = {
    color: "#E3E3E3",
    backgroundColor: "transparent",
    strokeWidth: 2,
  },
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
    theme,
  };
  store.dispatch({
    type: MoveActionTypes.STASH,
    entity: movableEntity,
  });
  return true;
}
