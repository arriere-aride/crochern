import { AABB } from "@/validators";
import {
  SnapBoxDocument,
  SnapBoxRect,
  SnapBoxRenderContainer,
  SnapBoxSvgContainer,
} from "./RenderSnapBox.styled";

export const RenderSnapBox = ({
  grid,
  cellSize = 16,
  theme = {
    strokeColor: "#f0df87",
    strokeWidth: 1,
    fillColor: "transparent",
  },
  currentPosition,
}: {
  grid: DOMRect;
  cellSize?: number;
  theme?: {
    strokeColor: string;
    strokeWidth: number;
    fillColor: string;
  };
  currentPosition: { x: number; y: number };
}): JSX.Element => {
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
