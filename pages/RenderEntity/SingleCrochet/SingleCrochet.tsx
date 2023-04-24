import React from "react";

interface SingleCrochet {
  /**
   * What fill color to use
   */
  fillColor?: string;
  /**
   * What stroke width to set
   */
  strokeWidth?: number;
  /**
   * Where to position
   */
  position?: {
    x: number;
    y: number;
  };
  /**
   * Line size
   */
  size?: number;
  /**
   * Rotating piece, in degrees
   */
  rotation?: number;

  padding?:number;
}

/** Render Single crochet (maille serrée) */
export const SingleCrochet = ({
  fillColor = "#1a1a1a",
  size = 16,
  position = { x: 0, y: 0 },
  rotation = 0,
  strokeWidth = 2,
  padding = 1,
  ...props
}: SingleCrochet) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const rotate = `rotate(${rotation})`;
  const halfSize = Math.floor(size / 2);
  const center = { x: x + halfSize, y: y + halfSize };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: { x: center.x + halfSize - padding, y: center.y + halfSize - padding },
  };

  return (
    <svg x={x} y={y} width={box.max.x} height={box.max.y}>
      <g
        id={`render-item-sc--${id}`}
        stroke={fillColor}
        strokeWidth={strokeWidth}
        transform={rotate}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        <line
          x1={box.min.x}
          y1={center.y}
          x2={box.max.y}
          y2={center.y}
        />
        <line
          x1={center.x}
          y1={box.min.y}
          x2={center.x}
          y2={box.max.y}
        />
      </g>
    </svg>
  );
};
