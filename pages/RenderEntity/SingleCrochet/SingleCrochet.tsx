import React from "react";

interface SingleCrochet {
  /**
   * What fill color to use
   */
  fillColor?: string;
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
  size: number;
  /**
   * Rotating piece, in degrees
   */
  rotation: number;
}

/** Render Single crochet (maille serrée) */
export const SingleCrochet = ({
  fillColor = "#1a1a1a",
  size = 8,
  position = { x: 50, y: 50 },
  rotation = 0,
  ...props
}: SingleCrochet) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const rotate = `rotate(${rotation})`;
  return (
    <g
      id={`render-item-sc--${id}`}
      stroke={fillColor}
      strokeWidth={2}
      transform={rotate}
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <line x1={x} y1={y} x2={x + size} y2={y + size} />
      <line x1={x + size} y1={y} x2={x} y2={y + size} />
    </g>
  );
};
