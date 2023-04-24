import React from "react";

interface SlipSnitch {
  /**
   * What fill color to use
   */
  fillColor?: string;
  /**
   * What stroke color to use
   */
  strokeColor?: string;
  /**
   * What radius to use
   */
  radius?: number;
  /**
   * Where to position
   */
  position?: {
    cx: number;
    cy: number;
  };
}

/** Render Snitch (maille coulée) */
export const SlipSnitch = ({
  fillColor = "#1a1a1a",
  strokeColor = "transparent",
  radius = 8,
  position = { cx: 8, cy: 8 },
  ...props
}: SlipSnitch) => {
  const id: number = Math.floor(Math.random() * 100);
  const r = Math.floor(radius / 2);

  return (
    <g id={`render-item-slst--${id}`} fill={fillColor} stroke={strokeColor}>
      <circle cx={position.cx} cy={position.cy} r={r} />
    </g>
  );
};
