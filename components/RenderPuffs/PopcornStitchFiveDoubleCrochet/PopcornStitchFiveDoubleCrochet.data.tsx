export const PopcornStitchFiveDoubleCrochetList =
  ({
    box,
    center,
    sizes,
    padding,
  }: {
    box: {
      min: { x: number; y: number };
      max: { x: number; y: number };
    };
    center: { x: number; y: number };
    sizes: {
      quarterSize: number;
      fifthSize: number;
      sixthSize: number;
    };
    padding: number;
  }) => [
    {
      pathD: `M ${box.min.x} ${box.min.y} Q ${
        center.x
      } ${box.min.y + sizes.quarterSize} ${
        box.max.x
      } ${box.min.y}`,
    },
    {
      pathD: `M ${box.min.x} ${center.y} H ${
        box.min.x + sizes.sixthSize
      } `,
    },
    {
      pathD: `M ${box.max.x} ${center.y} H ${
        box.max.x - sizes.sixthSize
      } `,
    },
    {
      pathD: `M ${center.x - padding} ${
        center.y
      } H ${center.x - sizes.fifthSize} `,
    },
    {
      pathD: `M ${center.x + padding} ${
        center.y
      } H ${center.x + sizes.fifthSize} `,
    },
    {
      pathD: `M ${center.x} ${box.min.y} V ${box.max.y}`,
    },
  ];
