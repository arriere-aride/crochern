import React from "react";

interface DoubleCrochet {
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
}

/** Render Double crochet (bride) */
export const DoubleCrochet = ({
  position = { x: 0, y: 0 },
  size = 16,
  fillColor = "#1a1a1a",
  rotation = 0,
  padding = 1,
  ...props
}: DoubleCrochet) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const fifthSize = Math.floor(size / 5);
  const rotate = `rotate(${rotation})`;
  const center = { x: x + halfSize, y: y + halfSize };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: { x: center.x + halfSize - padding, y: center.y + halfSize - padding },
  };

  return (
    <g id={`render-item-dc--${id}`} stroke={fillColor} strokeWidth={2}>
      <line
        stroke={fillColor}
        strokeWidth={2}
        x1={center.x}
        y1={box.max.y}
        x2={center.x}
        y2={box.min.y}
      />
      <line
        stroke={fillColor}
        strokeWidth={2}
        x1={box.min.x}
        y1={box.min.y}
        x2={box.max.x}
        y2={box.min.y}
      />
      <g
        id={`render-item-dc-bar--${id}`}
        transform={rotate}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        <line
          stroke={fillColor}
          strokeWidth={2}
          x1={center.x - fifthSize}
          x2={center.x + fifthSize}
          y1={center.y}
          y2={center.y}
        />
      </g>
    </g>
  );
};
