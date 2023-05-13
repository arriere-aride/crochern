import React from "react";
import { type RenderBox as IRenderBox } from "./RenderBox.d";

/* Render a box when entity is highlighted*/
const RenderBox = ({
  size = 18,
  boxTheme = {
    color: "#566FA6",
    strokeWidth: 2,
  },
  theme = {
    color: "#484848",
    strokeWidth: 2,
  },
  radius = 2,
  position = { x: 0, y: 0 },
  entity,
}: IRenderBox): JSX.Element => {
  const corners: { x: number; y: number }[] = [
    {
      x: position.x + radius,
      y: position.y + radius,
    },
    {
      x: size - radius,
      y: position.y + radius,
    },
    { x: size - radius, y: size - radius },
    {
      x: position.x + radius,
      y: size - radius,
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
          fill={boxTheme.color}
          key={`renderbox--box-corner--${index}`}
        />
      ))}
      {paths.map((line, index) => (
        <path
          d={line}
          stroke={boxTheme.color}
          key={`renderbox--box-line--${index}`}
        />
      ))}
      {React.Children.map(entity, (child) =>
        React.cloneElement(child as any, {
          position: {
            x: position.x,
            y: position.y,
          },
          theme,
        })
      )}
    </g>
  );
};
export { RenderBox };
