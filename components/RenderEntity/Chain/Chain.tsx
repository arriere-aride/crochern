import styled from "@emotion/styled";
import React from "react";

interface Chain {
  /**
   * What stroke width to set
   */
  strokeWidth?: number;
  /**
   * What fill color to use
   */
  fillColor?: string;
  /**
   * What stroke color to use
   */
  strokeColor?: string;
  /**
   * What padding to set
   */
  padding?: number;
  /**
   * What radius to use
   */
  radius?: {
    rx: number;
    ry: number;
  };
  /**
   * Box size
   */
  size?: number;
  /**
   * Where to position
   */
  position?: {
    x: number;
    y: number;
  };
}

/** Render Chain (maille en l’air) */
export const Chain = ({
  fillColor = "#1a1a1a",
  strokeColor = "transparent",
  padding = 0,
  radius = { rx: 8, ry: 4 },
  size = 16,
  position = { x: 0, y: 0 },
  strokeWidth = 0,
}: Chain) => {
  const id: number = Math.floor(Math.random() * 100);
  const { rx, ry } = radius;
  const halfSize = Math.floor(size / 2);
  const { x, y } = position;
  const center = { x: halfSize, y: halfSize };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: { x: center.x + halfSize - padding, y: center.y + halfSize - padding },
  };

  const ChainContainer = styled.svg`
    stroke: ${strokeColor};
    fill: ${fillColor};
  `;

  return (
    <ChainContainer x={x} y={y} width={box.max.x} height={box.max.y}>
      <g id={`render-item-ch--${id}`} strokeWidth={strokeWidth}>
        <ellipse cx={center.x} cy={center.y} rx={rx} ry={ry} />
      </g>
    </ChainContainer>
  );
};
