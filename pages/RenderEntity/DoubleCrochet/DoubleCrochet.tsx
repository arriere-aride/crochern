import React from "react";

interface DoubleCrochet {
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
    /**
   * Rotating bar, in degrees
   */
    rotation: number;
}

/** Render Half double crochet (demi-bride) */
export const DoubleCrochet = ({
  position = { x: 50, y: 50 },
  size = 16,
  fillColor = "#1a1a1a",
  rotation = 0,
  ...props
}: DoubleCrochet) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const quarterSize = Math.floor(size / 4);
  const rotate = `rotate(${rotation})`;

  return (
    <g id={`render-item-dc--${id}`} stroke={fillColor} strokeWidth={2}>
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
      <g id={`render-item-dc-bar--${id}`} 
            transform={rotate}
            style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        <line
          stroke={fillColor}
          strokeWidth={2}
          x1={x - quarterSize}
          x2={x + quarterSize}
          y1={y}
          y2={y}
        />
      </g>
    </g>
  );
};
