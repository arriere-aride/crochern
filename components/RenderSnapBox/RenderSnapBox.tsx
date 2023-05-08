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
  padding = 2,
  theme = {
    strokeColor: "#f0df87",
    strokeWidth: 1,
    fillColor: "transparent",
  },
  currentPosition,
}: IRenderSnapBox): JSX.Element => {
  const hideBox =
    grid != null && !AABB(currentPosition, grid);

  return (
    <SnapBoxDocument>
      <SnapBoxRenderContainer
        currentPosition={currentPosition}
        size={cellSize}
      >
        <SnapBoxSvgContainer size={cellSize}>
          {!hideBox && (
            <SnapBoxRect
              size={cellSize + padding}
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
