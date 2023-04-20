import React from "react";

interface DoubleTrebleCrochet {
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

/** Render Double treble crochet (Triple bride) */
export const DoubleTrebleCrochet = ({
  position = { x: 50, y: 50 },
  size = 16,
  fillColor = "#1a1a1a",
  rotation = 0,
  ...props
}: DoubleTrebleCrochet) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const tierceSize = Math.floor(size / 3);
  const quarterSize = Math.floor(size / 4);
  const rotate = `rotate(${rotation})`;

  return (
    <g id={`render-item-dtc--${id}`} stroke={fillColor} strokeWidth={2}>
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
      <g
        id={`render-item-dtc-bar--${id}`}
        transform={rotate}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        <line
          stroke={fillColor}
          strokeWidth={2}
          x1={x - quarterSize}
          x2={x + quarterSize}
          y1={y - tierceSize}
          y2={y - tierceSize}
        />
        <line
          stroke={fillColor}
          strokeWidth={2}
          x1={x - quarterSize}
          x2={x + quarterSize}
          y1={y}
          y2={y}
        />
        <line
          stroke={fillColor}
          strokeWidth={2}
          x1={x - quarterSize}
          x2={x + quarterSize}
          y1={y + tierceSize}
          y2={y + tierceSize}
        />
      </g>
    </g>
  );
};
