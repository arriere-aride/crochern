import styled from "@emotion/styled";
import React from "react";

interface TrebleCrochet {
  /**
   * What stroke width to set
   */
  strokeWidth?: number;
  /**
   * What position it have
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
   * What angle to set
   */
  rotation?: number;
  /**
   * What padding to set
   */
  padding?: number;
  /**
   * What scale middle bars have, ref to entity size
   */
  middlePadding?: number;
}

/** Render Treble crochet (Double bride) */
export const TrebleCrochet = ({
  position = { x: 0, y: 0 },
  size = 16,
  fillColor = "#1a1a1a",
  rotation = 0,
  padding = 1,
  middlePadding = 8,
  strokeWidth = 2,
}: TrebleCrochet) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const fifthSize = Math.floor(size / 5);
  const middleBarSize = Math.floor(size / middlePadding);
  const rotate = `rotate(${rotation})`;
  const center = { x: x + halfSize, y: y + halfSize };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: { x: center.x + halfSize - padding, y: center.y + halfSize - padding },
  };

  const TrebleCrochetContainer = styled.svg`
    stroke: ${fillColor};
    cursor: pointer;
  `;

  return (
    <TrebleCrochetContainer x={x} y={y} width={box.max.x} height={box.max.y}>
      <g id={`render-item-tc--${id}`} strokeWidth={strokeWidth}>
        <line x1={center.x} y1={box.max.y} x2={center.x} y2={box.min.y} />
        <line x1={box.min.x} y1={box.min.y} x2={box.max.x} y2={box.min.y} />
        <g
          id={`render-item-tc-bar--${id}`}
          transform={rotate}
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <line
            x1={center.x - fifthSize}
            x2={center.x + fifthSize}
            y1={center.y + middleBarSize}
            y2={center.y + middleBarSize}
          />
          <line
            x1={center.x - fifthSize}
            x2={center.x + fifthSize}
            y1={center.y - middleBarSize}
            y2={center.y - middleBarSize}
          />
        </g>
      </g>
    </TrebleCrochetContainer>
  );
};
