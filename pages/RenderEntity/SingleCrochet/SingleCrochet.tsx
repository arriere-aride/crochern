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
}

/** Render Single crochet (maille serrée) */
export const SingleCrochet = ({
  fillColor = "#1a1a1a",
  size = 20,
  position = { x: 0, y: 0 },
  rotation = 0,
  strokeWidth = 2,
  ...props
}: SingleCrochet) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const rotate = `rotate(${rotation})`;
  const tierceSize = Math.floor(size / 3);
  const twoTierceSize = Math.floor((size * 2) / 3);

  return (
    <svg x={x} y={y} width={size + x} height={size + y}>
      <g
        id={`render-item-sc--${id}`}
        stroke={fillColor}
        strokeWidth={strokeWidth}
        transform={rotate}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        <line
          x1={x + tierceSize}
          y1={y + tierceSize}
          x2={x + twoTierceSize}
          y2={y + twoTierceSize}
        />
        <line
          x1={x + twoTierceSize}
          y1={y + tierceSize}
          x2={x + tierceSize}
          y2={y + twoTierceSize}
        />
      </g>
    </svg>
  );
};
