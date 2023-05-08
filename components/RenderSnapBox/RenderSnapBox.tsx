import { AABB } from "@/validators";
import { useMousePosition } from "../hooks";
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
}: {
  grid: DOMRect;
  cellSize?: number;
  theme: {
    strokeColor?: string;
    strokeWidth?: number;
    fillColor?: string;
  };
}): JSX.Element => {
  const currentPosition = useMousePosition();
  const [x, y] = [
    Math.round(currentPosition.x / cellSize) *
      cellSize,
    Math.round(currentPosition.y / cellSize) *
      cellSize,
  ];
  const hideBox =
    grid != null && !AABB(currentPosition, grid);

  return (
    <SnapBoxDocument>
      <SnapBoxRenderContainer
        currentPosition={{ x, y }}
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
