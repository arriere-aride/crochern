export const InvertedYStitchList = ({
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
    pathD: `M ${center.x} ${box.min.y} V ${center.y}`,
  },
  {
    pathD: `M ${center.x - strokeWidth} ${
      box.min.y
    } H ${center.x + strokeWidth}`,
  },
  {
    pathD: `M ${center.x - strokeWidth} ${
      box.min.y + strokeWidth + padding
    } H ${center.x + strokeWidth}`,
    rotate: `rotate(${15})`,
  },
  {
    pathD: `M ${center.x} ${center.y} ${box.max.x} ${box.max.y}`,
  },
  {
    pathD: `M ${center.x} ${center.y} ${box.min.x} ${box.max.y}`,
  },
  {
    pathD: `M ${center.x - strokeWidth} ${
      box.max.y - strokeWidth
    } H ${box.min.x}`,
    rotate: `rotate(${15})`,
  },
  {
    pathD: `M ${center.x + strokeWidth} ${
      box.max.y - strokeWidth
    } H ${box.max.x}`,
    rotate: `rotate(${-15})`,
  },
];
