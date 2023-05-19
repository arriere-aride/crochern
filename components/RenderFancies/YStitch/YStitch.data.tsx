export const YStitchList = ({
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
    pathD: `M ${box.min.x + padding} ${
      box.min.y
    } ${center.x} ${
      center.y + strokeWidth + padding
    }`,
  },
  {
    pathD: `M ${box.max.x - padding} ${
      box.min.y
    } ${center.x} ${
      center.y + strokeWidth + padding
    }`,
  },
  {
    pathD: `M ${center.x} ${
      center.y + strokeWidth + padding
    } V ${box.max.y}`,
  },
  {
    pathD: `M ${box.min.x} ${box.min.y} H ${
      box.min.x + strokeWidth + padding
    }`,
  },
  {
    pathD: `M ${box.max.x} ${box.min.y} H ${
      box.max.x - strokeWidth - padding
    }`,
  },
  {
    pathD: `M ${box.min.x + strokeWidth} ${
      center.y - strokeWidth
    } H ${center.x - padding}`,
    rotate: `rotate(${-15})`,
  },
  {
    pathD: `M ${box.max.x - padding} ${
      center.y - strokeWidth - padding
    } H ${center.x + strokeWidth}`,
    rotate: `rotate(${15})`,
  },
  {
    pathD: `M ${
      box.max.x - strokeWidth - padding
    } ${center.y} H ${center.x}`,
    rotate: `rotate(${15})`,
  },
];
