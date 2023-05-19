export const CrocodileStitchList = ({
  strokeWidth,
  padding,
  box,
  center,
}: {
  strokeWidth: number;
  padding: number;
  box: {
    min: { x: number; y: number };
    max: { x: number; y: number };
  };
  center: { x: number; y: number };
}) => [
  {
    pathD: `M ${box.min.x} ${box.min.y} C ${box.min.x} ${box.max.y}, ${box.max.x} ${box.max.y} ${box.max.x} ${box.min.y}`,
    fill: "transparent",
  },
  {
    pathD: `M ${box.min.x + strokeWidth} ${
      box.min.y
    } ${box.max.x - strokeWidth} ${box.min.y}`,
  },
  {
    pathD: `M ${
      box.min.x + strokeWidth * 2 + padding
    } ${box.min.y} V ${
      box.max.y - strokeWidth * 2
    }`,
  },
  {
    pathD: `M ${
      box.max.x - strokeWidth * 2 - padding
    } ${box.min.y} V ${
      box.max.y - strokeWidth * 2
    }`,
  },
  {
    pathD: `M ${box.min.x + strokeWidth} ${
      box.min.y + strokeWidth + padding
    } H ${box.max.x - strokeWidth}`,
  },
];
