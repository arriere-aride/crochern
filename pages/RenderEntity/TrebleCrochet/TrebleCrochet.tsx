import React from "react";

interface TrebleCrochet {
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

/** Render Treble crochet (Double bride) */
export const TrebleCrochet = ({
  position = { x: 50, y: 50 },
  size = 16,
  fillColor = "#1a1a1a",
  rotation = 0,
  ...props
}: TrebleCrochet) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const quarterSize = Math.floor(size / 4);
  const sixthSize= Math.floor(size/6)
  const rotate = `rotate(${rotation})`;

  return (
    <g id={`render-item-tc--${id}`} stroke={fillColor} strokeWidth={2}>
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
      <g id={`render-item-tc-bar--${id}`} 
            transform={rotate}
            style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        <line
          stroke={fillColor}
          strokeWidth={2}
          x1={x - quarterSize}
          x2={x + quarterSize}
          y1={y - sixthSize}
          y2={y - sixthSize}
        />
        <line
          stroke={fillColor}
          strokeWidth={2}
          x1={x - quarterSize}
          x2={x + quarterSize}
          y1={y + sixthSize}
          y2={y + sixthSize}
        />
      </g>
    </g>
  );
};
