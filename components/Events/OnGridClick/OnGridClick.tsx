import {
  SelectPointPositionInGrid,
  SelectTargetEntitiesClicked,
} from "@/selectors";
import store, {
  SelectionActionTypes,
} from "@/stores";

export const OnGridClick = (
  event: any,
  grid?: DOMRect,
  padding?: number
) => {
  if (padding == null) {
    padding = 4;
  }
  const currentPosition = {
    x: event.clientX,
    y: event.clientY,
  };

  const [x, y] = SelectPointPositionInGrid({
    point: currentPosition,
    grid,
  });

  const isTargetClicked =
    SelectTargetEntitiesClicked({
      x,
      y,
    }).includes(true);

  if (isTargetClicked === false) {
    store.dispatch({
      type: SelectionActionTypes.DESELECT,
    });
  }
};
