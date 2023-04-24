import React from "react";

interface RenderBox {
  size: number;
  fillColor: string;
  radius: number;
  entity: React.ReactNode | JSX.Element;
  padding: number;
  position: { x: number; y: number };
}

const RenderBox = ({
  size = 20,
  fillColor = "#566FA6",
  radius = 2,
  position = { x: 0, y: 0 },
  entity,
}: RenderBox): JSX.Element => {
  const corners: { cx: number; cy: number }[] = [
    { cx: position.x + radius, cy: position.y + radius },
    { cx: size - radius, cy: position.y + radius },
    { cx: size - radius, cy: size - radius },
    { cx: position.x + radius, cy: size - radius },
  ];
  const paths: string[] = [
    `M ${position.x} ${position.y + radius} H ${size}`,
    `M ${size - radius} ${position.y + radius} V ${size - radius}`,
    `M ${position.x} ${size - radius} H ${size}`,
    `M ${position.x + radius} ${size - radius} V ${position.y + radius}`,
  ];
  return (
    <g strokeWidth={1} >
      {corners.map((corner) => (
        <circle {...corner} r={radius} fill={fillColor} />
      ))}
      {paths.map((line) => (
        <path d={line} stroke={fillColor} />
      ))}
      {React.Children.map(entity, (child) =>
        React.cloneElement(child as any, {
          position: {
            cx: (position.x + size) / 2,
            cy: (position.y + size) / 2,
            x: position.x,
            y: position.y,
            
          },
          
          size
        })
      )}
    </g>
  );
};
export { RenderBox };
