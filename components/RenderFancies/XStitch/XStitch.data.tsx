export const XStitchList = ({
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
    } ${box.max.x} ${box.max.y}`,
  },
  {
    pathD: `M ${box.max.x - padding} ${
      box.min.y
    } ${box.min.x} ${box.max.y}`,
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
  },
  {
    pathD: `M ${box.max.x - strokeWidth} ${
      center.y - strokeWidth
    } H ${center.x + padding}`,
  },
  {
    pathD: `M ${box.max.x - strokeWidth} ${
      box.max.y - strokeWidth
    } H ${center.x + padding}`,
  },
  {
    pathD: `M ${box.min.x + strokeWidth} ${
      box.max.y - strokeWidth
    } H ${center.x - padding}`,
  },
];
