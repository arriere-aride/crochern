import React from "react";

interface TwoSingleCrochetOneStitch {
  /**
   * What fill color to use
   */
  fillColor?: string;
  /**
   * What stroke width to use
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
   * What padding to use
   */
  padding?: number;
}

/** Render Two Single Crochet in One Stitch  (2 Mailles Serrées dans la même Maille) */
export const TwoSingleCrochetOneStitch = ({
  fillColor = "#1a1a1a",
  position = { x: 0, y: 0 },
  padding = 1,
  size = 16,
  strokeWidth = 2,
  ...props
}: TwoSingleCrochetOneStitch) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const doubleStrokeWidth = strokeWidth * 2;

  const center = { x: x + halfSize, y: y + halfSize };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: { x: center.x + halfSize - padding, y: center.y + halfSize - padding },
  };

  return (
    <g id={`render-item-tscoc--${id}`} stroke={fillColor} strokeWidth={2}>
      <g
        id={`render-item-tscoc-sc--${id}`}
        stroke={fillColor}
        strokeWidth={strokeWidth}
      >
        <line
          x1={box.min.x + doubleStrokeWidth}
          y1={center.y}
          x2={box.max.x - doubleStrokeWidth}
          y2={center.y}
        />
        <line
          x1={center.x}
          y1={box.min.y + doubleStrokeWidth}
          x2={center.x}
          y2={box.max.y - doubleStrokeWidth}
        />
      </g>
      <g id={`render-item-tscoc-container--${id}`}>
        <path d={`M ${center.x} ${box.max.y} ${box.min.x} ${center.y} `} />
        <path d={`M ${center.x} ${box.max.y} ${box.max.x} ${center.y} `} />
      </g>
    </g>
  );
};
