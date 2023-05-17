export const RepeatDoubleCrochetList = ({
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
    quarterSize: number;
    fifthSize: number;
    sixthSize: number;
  };
}) => [
  {
    pathD: `M ${center.x} ${box.min.y} ${
      box.min.x + sizes.sixthSize
    } ${box.max.y}`,
  },
  {
    pathD: `M ${box.min.x + sizes.quarterSize} ${
      center.y + sizes.fifthSize
    } ${box.min.x} ${
      center.y + sizes.fifthSize
    } `,
    rotate: `rotate(${15})`,
  },
  {
    pathD: `M ${center.x} ${box.min.y} ${
      box.max.x - sizes.sixthSize
    } ${box.max.y}`,
  },
  {
    pathD: `M ${box.max.x - sizes.quarterSize} ${
      center.y + sizes.fifthSize
    } ${box.max.x} ${
      center.y + sizes.fifthSize
    } `,
    rotate: `rotate(${-15})`,
  },
  {
    pathD: `M ${box.max.x} ${box.max.y} ${
      box.max.x - sizes.quarterSize
    } ${box.max.y} `,
  },
  {
    pathD: `M ${box.min.x} ${box.max.y} ${
      box.min.x + sizes.quarterSize
    } ${box.max.y} `,
  },
  {
    pathD: `M ${center.x} ${box.min.y} ${center.x} ${box.max.y}`,
  },
  {
    pathD: `M ${center.x + theme.strokeWidth} ${
      center.y + sizes.fifthSize
    } ${center.x - theme.strokeWidth} ${
      center.y + sizes.fifthSize
    }`,
  },
  {
    pathD: `M ${center.x + theme.strokeWidth} ${
      box.max.y
    } ${center.x - theme.strokeWidth} ${
      box.max.y
    }`,
  },
];
