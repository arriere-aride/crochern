export const TwoDoubleCrochetTogetherList = ({
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
    pathD: `M ${center.x} ${box.min.y} ${
      box.min.x + sizes.sixthSize
    } ${box.max.y}`,
  },
  {
    pathD: `M ${box.min.x + sizes.tierceSize} ${
      center.y
    } ${box.min.x + sizes.sixthSize} ${
      center.y
    } `,
    rotate: `rotate(${-15})`,
  },
  {
    pathD: `M ${center.x} ${box.min.y} ${
      box.max.x - sizes.sixthSize
    } ${box.max.y}`,
  },
  {
    pathD: `M ${box.max.x - sizes.sixthSize} ${
      center.y
    } ${box.max.x - sizes.tierceSize} ${
      center.y
    } `,
    rotate: `rotate(${15})`,
  },
  {
    pathD: `M ${box.max.x} ${box.max.y} ${
      box.max.x - sizes.tierceSize
    } ${box.max.y} `,
  },
  {
    pathD: `M ${box.min.x} ${box.max.y} ${
      box.min.x + sizes.tierceSize
    } ${box.max.y} `,
  },
];
