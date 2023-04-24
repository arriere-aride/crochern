import React from "react";

interface FrontLoopOnly {
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
   * What padding to set
   */
  padding?: number;
  /**
   * Line size
   */
  size?: number;
  /**
   * Arc debug toggle
   */
  debug?: boolean;
}

/** Render In back loop only (Dans le brin arrière) */
export const FrontLoopOnly = ({
  fillColor = "#1a1a1a",
  position = { x: 0, y: 0 },
  size = 16,
  debug = false,
  padding = 1,
  ...props
}: FrontLoopOnly) => {
  const id: string = Math.floor(Math.random() * 100).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const quarterSize = Math.floor(size / 4);
  const sixthSize = Math.floor(size / 6);
  const center = { x: x + halfSize, y: y + halfSize };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: { x: center.x + halfSize - padding, y: center.y + halfSize - padding },
  };

  const curve: { x: string; y: string }[] = [
    { x: `${box.min.x}`, y: `${box.max.y}` },
    { x: `${box.max.x}`, y: `${box.max.y}` },
  ];
  const corner = {
    left: { x: box.min.x + sixthSize, y: box.max.y - quarterSize },
    right: { x: box.max.x - sixthSize, y: box.max.y - quarterSize },
  };

  return (
    <g
      id={`render-item-flo--${id}`}
      stroke={fillColor}
      strokeWidth={2}
      fill="transparent"
    >
      <path
        d={`M ${corner.left.x} ${corner.left.y} C ${curve[0].x} ${curve[0].y}, ${curve[1].x} ${curve[1].y}, ${corner.right.x} ${corner.right.y} `}
      />
      {debug && (
        <g id={`debug-render-item-flo--${id}`} fill="red" strokeWidth={0}>
          <circle cx={curve[0].x} cy={curve[0].y} r={1} />
          <circle cx={curve[1].x} cy={curve[1].y} r={1} />
        </g>
      )}
    </g>
  );
};
