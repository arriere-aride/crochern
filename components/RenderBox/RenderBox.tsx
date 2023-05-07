import React from "react";

interface RenderBox {
  /**
   * Box size, will also scale entity inside
   */
  size?: number;
  /**
   * What stroke width to use
   */
  strokeWidth?: number;
  /**
   * What fill color to use
   */
  fillColor?: string;
  /**
   * What radius corners circle to use
   */
  radius?: number;
  /**
   * What entity to render
   */
  entity: React.ReactNode | JSX.Element;
  /**
   * What padding entity should have
   */
  padding?: number;
  /**
   * What position it have on the grid
   */
  position?: { x: number; y: number };
}

const RenderBox = ({
  size = 26,
  fillColor = "#566FA6",
  radius = 2,
  padding = 4,
  strokeWidth = 2,
  position = { x: 0, y: 0 },
  entity,
}: RenderBox): JSX.Element => {
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
          fill={fillColor}
          key={`renderbox--box-corner--${index}`}
        />
      ))}
      {paths.map((line, index) => (
        <path
          d={line}
          stroke={fillColor}
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
          padding,
          size,
          strokeWidth,
        })
      )}
    </g>
  );
};
export { RenderBox };
