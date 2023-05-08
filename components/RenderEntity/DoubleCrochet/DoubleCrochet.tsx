import styled from "@emotion/styled";
import { type DoubleCrochet as IDoubleCrochet } from "./DoubleCrochet.d";

/** Render Double crochet (bride) */
export const DoubleCrochet = ({
  position = { x: 0, y: 0 },
  size = 16,
  fillColor = "#1a1a1a",
  rotation = 0,
  padding = 1,
  strokeWidth = 2,
}: IDoubleCrochet) => {
  const id: string = Math.floor(
    Math.random() * 100
  ).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const fifthSize = Math.floor(size / 5);
  const rotate = `rotate(${rotation})`;
  const center = {
    x: x + halfSize,
    y: y + halfSize,
  };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: {
      x: center.x + halfSize - padding,
      y: center.y + halfSize - padding,
    },
  };

  const DoubleCrochetContainer = styled.svg`
    stroke: ${fillColor};
    cursor: pointer;
  `;

  return (
    <DoubleCrochetContainer
      x={x}
      y={y}
      width={box.max.x}
      height={box.max.y}
    >
      <g
        id={`render-item-dc--${id}`}
        strokeWidth={strokeWidth}
      >
        <line
          strokeWidth={strokeWidth}
          x1={center.x}
          y1={box.max.y}
          x2={center.x}
          y2={box.min.y}
        />
        <line
          strokeWidth={strokeWidth}
          x1={box.min.x}
          y1={box.min.y}
          x2={box.max.x}
          y2={box.min.y}
        />
        <g
          id={`render-item-dc-bar--${id}`}
          transform={rotate}
          style={{
            transformOrigin: "center",
            transformBox: "fill-box",
          }}
        >
          <line
            strokeWidth={strokeWidth}
            x1={center.x - fifthSize}
            x2={center.x + fifthSize}
            y1={center.y}
            y2={center.y}
          />
        </g>
      </g>
    </DoubleCrochetContainer>
  );
};
