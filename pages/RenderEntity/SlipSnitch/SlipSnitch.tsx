import React from "react";

interface SlipSnitch {
  /**
   * What fill color to use
   */
  fillColor?: string;
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

/** Render Snitch (maille serrée) */
export const SlipSnitch = ({
  fillColor = "#1a1a1a",
  radius = 8,
  position = { cx: 50, cy: 50 },
  ...props
}: SlipSnitch) => {
  const id: string = Math.floor(Math.random() * 100).toString();

  return (
    <g id={`render-item-slst--${id}`} fill={fillColor}>
      <circle
        cx={position.cx.toString()}
        cy={position.cy.toString()}
        r={radius.toString()}
      />
    </g>
  );
};
