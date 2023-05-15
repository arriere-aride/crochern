export const TwoDoubleCrochetOneStitchData = ({
  box,
  center,
  theme,
  sizes,
}: {
  box: {
    min: { x: number; y: number };
    max: { x: number; y: number };
  };
  center: { x: number; y: number };
  theme: {
    strokeWidth: number;
    color?: any;
    backgroundColor?: any;
  };
  sizes: {
    halfSize: number;
    tierceSize: number;
    sixthSize: number;
  };
}) => [
  {
    pathD: `M ${box.min.x + theme.strokeWidth} ${
      center.y
    } ${
      box.min.x +
      sizes.halfSize -
      theme.strokeWidth
    } ${center.y} `,
    rotate: `rotate(${-15})`,
  },
  {
    pathD: `M ${box.max.x - theme.strokeWidth} ${
      center.y
    } ${
      box.max.x -
      sizes.halfSize +
      theme.strokeWidth
    } ${center.y} `,
    rotate: `rotate(${15})`,
  },
  {
    pathD: `M ${center.x} ${box.max.y} ${
      box.min.x + sizes.sixthSize
    } ${box.min.y} `,
  },
  {
    pathD: `M ${box.min.x} ${box.min.y} ${
      box.min.x + sizes.tierceSize
    } ${box.min.y} `,
  },
  {
    pathD: `M ${center.x} ${box.max.y} ${
      box.max.x - sizes.sixthSize
    } ${box.min.y} `,
  },
  {
    pathD: `M ${box.max.x} ${box.min.y} ${
      box.max.x - sizes.tierceSize
    } ${box.min.y} `,
  },
];
