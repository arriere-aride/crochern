import React from "react";
import { type RenderBox as IRenderBox } from "./RenderBox.d";

/* Render a box when entity is highlighted*/
const RenderBox = ({
  size = 18,
  theme = {
    fillColor: "#566FA6",
    strokeWidth: 2,
  },
  radius = 2,
  padding = 0,
  position = { x: 0, y: 0 },
  entity,
}: IRenderBox): JSX.Element => {
  const corners: { cx: number; cy: number }[] = [
    {
      cx: position.x + radius,
      cy: position.y + radius,
    },
    {
      cx: size - radius,
      cy: position.y + radius,
    },
    { cx: size - radius, cy: size - radius },
    {
      cx: position.x + radius,
      cy: size - radius,
    },
  ];
  const paths: string[] = [
    `M ${position.x} ${
      position.y + radius
    } H ${size}`,
    `M ${size - radius} ${
      position.y + radius
    } V ${size - radius}`,
    `M ${position.x} ${size - radius} H ${size}`,
    `M ${position.x + radius} ${
      size - radius
    } V ${position.y + radius}`,
  ];
  return (
    <g strokeWidth={1}>
      {corners.map((corner, index) => (
        <circle
          {...corner}
          r={radius}
          fill={theme.fillColor}
          key={`renderbox--box-corner--${index}`}
        />
      ))}
      {paths.map((line, index) => (
        <path
          d={line}
          stroke={theme.fillColor}
          key={`renderbox--box-line--${index}`}
        />
      ))}
      {React.Children.map(entity, (child) =>
        React.cloneElement(child as any, {
          position: {
            cx: (position.x + size) / 2,
            cy: (position.y + size) / 2,
            x: position.x,
            y: position.y,
          },
          // padding,
          // size,
          strokeWidth: theme.strokeWidth,
        })
      )}
    </g>
  );
};
export { RenderBox };
