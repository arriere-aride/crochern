import { AABB } from "@/validators";
import { type RenderSnapBox as IRenderSnapBox } from "./RenderSnapBox.d";
import {
  SnapBoxDocument,
  SnapBoxRect,
  SnapBoxRenderContainer,
  SnapBoxSvgContainer,
} from "./RenderSnapBox.styled";

export const RenderSnapBox = ({
  grid,
  cellSize = 16,
  padding = 4,
  theme = {
    strokeColor: "#f0df87",
    strokeWidth: 1,
    fillColor: "transparent",
  },
  currentPosition,
  onDocumentClick,
}: IRenderSnapBox): JSX.Element => {
  const hideBox =
    grid != null && !AABB(currentPosition, grid);
  const [x, y] = [
    grid
      ? currentPosition.x - grid.left + padding
      : currentPosition.x,
    grid
      ? currentPosition.y - grid.top
      : currentPosition.y,
  ];
  return (
    <SnapBoxDocument
      onClick={(e) =>
        onDocumentClick &&
        onDocumentClick({
          e,
          position: { x, y },
        })
      }
    >
      <SnapBoxRenderContainer
        currentPosition={{
          ...currentPosition,
          x: currentPosition.x + padding,
        }}
        size={cellSize}
      >
        <SnapBoxSvgContainer
          size={cellSize + padding}
        >
          {!hideBox && (
            <SnapBoxRect
              size={cellSize}
              stroke={theme.strokeColor}
              fill={theme.fillColor}
              strokeWidth={theme.strokeWidth}
            />
          )}
        </SnapBoxSvgContainer>
      </SnapBoxRenderContainer>
    </SnapBoxDocument>
  );
};
