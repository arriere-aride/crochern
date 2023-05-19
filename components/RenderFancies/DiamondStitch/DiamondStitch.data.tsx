export const DiamondStitchList = ({
  strokeWidth,
  padding,
  box,
}: {
  strokeWidth: number;
  padding: number;
  box: {
    min: { x: number; y: number };
    max: { x: number; y: number };
  };
}) => [
  {
    pathD: `M ${box.min.x + padding} ${
      box.min.y
    } H ${box.max.x}`,
    rotate: `rotate(${50})`,
  },
  {
    pathD: `M ${box.min.x} ${
      box.min.y + padding
    } V ${box.max.x}`,
  },
];
