import React from "react";

interface HalfDoubleCrochet {
  /**
   * What position it should have, centered point
   */
  position?: { x: number; y: number };
  /**
   * Line size
   */
  size: number;
  /**
   * What fill color to use
   */
  fillColor?: string;
}

/** Render Half double crochet (demi-bride) */
export const HalfDoubleCrochet = ({
  position = { x: 50, y: 50 },
  size = 16,
  fillColor = "#1a1a1a",
  ...props
}: HalfDoubleCrochet) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);

  return (
    <g id={`render-item-hdc--${id}`} stroke={fillColor} strokeWidth={2}>
      <line
        stroke={fillColor}
        strokeWidth={2}
        x1={x}
        y1={y + halfSize}
        x2={x}
        y2={y - halfSize}
      />
      <line
        stroke={fillColor}
        strokeWidth={2}
        x1={x - halfSize}
        y1={y - halfSize}
        x2={x + halfSize}
        y2={y - halfSize}
      />
    </g>
  );
};
