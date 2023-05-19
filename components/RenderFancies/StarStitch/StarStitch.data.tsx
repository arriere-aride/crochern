export const StarStitchList = ({
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
    pathD: `M ${strokeWidth + padding} ${
      box.min.x
    } H ${box.max.x}`,
  },
  {
    pathD: `M ${strokeWidth + padding} ${
      box.min.x
    } H ${box.max.x}`,
    rotate: `rotate(${25})`,
  },
  {
    pathD: `M ${strokeWidth + padding} ${
      box.min.x
    } H ${box.max.x}`,
    rotate: `rotate(${50})`,
  },
  {
    pathD: `M ${box.min.x} ${
      strokeWidth + padding
    } V ${box.max.x}`,
  },
];
