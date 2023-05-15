export const RepeatDoubleCrochetOneStitchList = ({
  box,
  sizes,
  padding,
  center,
}: {
  box: {
    min: { x: number; y: number };
    max: { x: number; y: number };
  };
  sizes: {
    quarterSize: number;
    fifthSize: number;
    sixthSize: number;
  };
  padding: number;
  center: { x: number; y: number };
}) => [
  {
    id: "left--vertical-bar",
    pathD: `M ${box.min.x + sizes.sixthSize} ${
      box.min.y
    } ${center.x} ${box.max.y}`,
  },
  {
    id: "left--top-bar",
    pathD: `M ${box.min.x} ${box.min.y} ${
      box.min.x + sizes.quarterSize
    } ${box.min.y}`,
  },

  {
    id: "left--middle-bar",
    pathD: `M ${box.min.x + padding} ${
      center.y - sizes.fifthSize
    } ${box.min.x + sizes.quarterSize} ${
      center.y - sizes.fifthSize
    }`,
  },
  {
    id: "right--vertical-bar",
    pathD: `M ${box.max.x - sizes.sixthSize} ${
      box.min.y
    } ${center.x} ${box.max.y}`,
  },
  {
    id: "right--top-bar",
    pathD: `M ${box.max.x} ${box.min.y} ${
      box.max.x - sizes.quarterSize
    } ${box.min.y}`,
  },
  {
    id: "right--middle-bar",
    pathD: `M ${box.max.x - padding} ${
      center.y - sizes.fifthSize
    } ${box.max.x - sizes.quarterSize} ${
      center.y - sizes.fifthSize
    }`,
  },
  {
    id: "center--vertical-bar",
    pathD: `M ${center.x} ${box.min.y} 
    ${center.x} ${box.max.y}`,
  },
  {
    id: "center--top-bar",
    pathD: `M ${center.x - sizes.sixthSize} ${
      box.min.y
    } ${center.x + sizes.sixthSize} ${box.min.y}`,
  },
  {
    id: "center--middle-bar",
    pathD: `M ${center.x - sizes.sixthSize} ${
      center.y - sizes.fifthSize
    } ${center.x + sizes.sixthSize} ${
      center.y - sizes.fifthSize
    }`,
  },
];
