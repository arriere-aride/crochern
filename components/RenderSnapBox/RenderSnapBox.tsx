import styled from "@emotion/styled";
import { useMousePosition } from "../hooks";

const Container = styled.svg``;
const Rect = styled.rect``;

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
  const { strokeColor, strokeWidth, fillColor } =
    theme;

  const [x, y] = [
    Math.round(
      (currentPosition.x - cellSize) / cellSize
    ) * cellSize,

    Math.round(
      (currentPosition.y - cellSize) / cellSize
    ) * cellSize,
  ];

  return (
    <Container>
      <Rect
        x={x}
        y={y}
        width={cellSize}
        height={cellSize}
        stroke={strokeColor}
        fill={fillColor}
        strokeWidth={strokeWidth}
      />
    </Container>
  );
};
