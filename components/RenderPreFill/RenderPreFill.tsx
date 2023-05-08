import {
  RenderShadowBox,
  RenderSnapBox,
  useMousePosition,
} from "@/components";
import { SelectMemoryEntity } from "@/selectors";
import { InMemoryEntity } from "@/stores/EntityMoveReducer";
import { Fragment } from "react";
import { type RenderPreFill as IRenderPreFill } from "./RenderPreFill.d";

/**
 * Render element before putting entity on the grid.
 */
export const RenderPreFill = ({
  grid = null,
  cellSize = 16,
  OnStashBoxRenderClick = () => true,
}: IRenderPreFill) => {
  const hasStash: boolean =
    SelectMemoryEntity().length > 0;
  const current: InMemoryEntity =
    SelectMemoryEntity()[0];
  const currentPosition = useMousePosition();

  if (current && grid) {
    const [x, y] = [
      Math.round(currentPosition.x / cellSize) *
        cellSize,
      Math.round(currentPosition.y / cellSize) *
        cellSize,
    ];
    return (
      <Fragment>
        <RenderSnapBox
          grid={grid}
          currentPosition={{ x, y }}
        />
        <RenderShadowBox
          currentPosition={{ x, y }}
          currentEntity={current}
          grid={grid}
          onDocumentClick={OnStashBoxRenderClick}
        />
      </Fragment>
    );
  }
  return <></>;
};
