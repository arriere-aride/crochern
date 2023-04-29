import styled from "@emotion/styled";
import React from "react";

interface HalfDoubleCrochet {
  /**
   * What stroke width to set
   */
  strokeWidth?: number;
  /**
   * What position it should have, centered point
   */
  position?: { x: number; y: number };
  /**
   * Line size
   */
  size?: number;
  /**
   * What fill color to use
   */
  fillColor?: string;
  /**
   * What padding to set
   */
  padding?: number;
}

/** Render Half double crochet (demi-bride) */
export const HalfDoubleCrochet = ({
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
  fillColor = "#1a1a1a",
  strokeWidth = 2,
}: HalfDoubleCrochet) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const center = { x: x + halfSize, y: y + halfSize };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: { x: center.x + halfSize - padding, y: center.y + halfSize - padding },
  };
  const HalfDoubleCrochetContainer = styled.svg`
    stroke: ${fillColor};
    cursor: pointer;
  `;

  return (
    <HalfDoubleCrochetContainer
      x={x}
      y={y}
      width={box.max.x}
      height={box.max.y}
    >
      <g id={`render-item-hdc--${id}`} strokeWidth={strokeWidth}>
        <line
          strokeWidth={2}
          x1={center.x}
          y1={box.max.y}
          x2={center.x}
          y2={box.min.y}
        />
        <line
          strokeWidth={2}
          x1={box.min.x}
          y1={box.min.y}
          x2={box.max.x}
          y2={box.min.y}
        />
      </g>
    </HalfDoubleCrochetContainer>
  );
};
