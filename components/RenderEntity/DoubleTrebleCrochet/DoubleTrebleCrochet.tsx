import styled from "@emotion/styled";
import React from "react";

interface DoubleTrebleCrochet {
  /**
   * What position it have
   */
  position?: { x: number; y: number };
  /**
   * Line size
   */
  size?: number;
  /**
   * What stroke width to use
   */
  strokeWidth?: number;
  /**
   * What fill color to use
   */
  fillColor?: string;
  /**
   * What angle to set
   */
  rotation?: number;
  /**
   * What padding to set
   */
  padding?: number;
  /**
   * What scale middle bars have,
   * ref to entity box and center
   */
  middlePadding?: number;
  /**
   * How to style on hover?
   */
  hover?: {
    fillColor: string;
  };
}

/** Render Double treble crochet (Triple bride) */
export const DoubleTrebleCrochet = ({
  position = { x: 0, y: 0 },
  size = 16,
  fillColor = "#1a1a1a",
  rotation = 0,
  padding = 1,
  strokeWidth = 2,
  middlePadding = 4,
}: DoubleTrebleCrochet) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const fifthSize = Math.floor(size / 5);
  const middleBarSize = Math.floor(middlePadding);
  const rotate = `rotate(${rotation})`;
  const center = { x: x + halfSize, y: y + halfSize };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: { x: center.x + halfSize - padding, y: center.y + halfSize - padding },
  };

  const DoubleTrebleCrochetContainer = styled.svg`
    stroke: ${fillColor};
    cursor: pointer;
  `;

  return (
    <DoubleTrebleCrochetContainer
      x={x}
      y={y}
      width={box.max.x}
      height={box.max.y}
    >
      <g id={`render-item-dtc--${id}`} strokeWidth={strokeWidth}>
        <line x1={center.x} y1={box.max.y} x2={center.x} y2={box.min.y} />
        <line x1={box.min.x} y1={box.min.y} x2={box.max.x} y2={box.min.y} />
        <g
          id={`render-item-dtc-bar--${id}`}
          transform={rotate}
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <line
            x1={center.x - fifthSize}
            x2={center.x + fifthSize}
            y1={box.min.y + middleBarSize}
            y2={box.min.y + middleBarSize}
          />
          <line
            x1={center.x - fifthSize}
            x2={center.x + fifthSize}
            y1={center.y}
            y2={center.y}
          />
          <line
            x1={center.x - fifthSize}
            x2={center.x + fifthSize}
            y1={box.max.y - middleBarSize}
            y2={box.max.y - middleBarSize}
          />
        </g>
      </g>
    </DoubleTrebleCrochetContainer>
  );
};
