interface Point {
  x: number;
  y: number;
}
interface Box {
  min: { x: number; y: number };
  max: { x: number; y: number };
}

export const DoubleTrebleCrochetBars = ({
  center,
  box,
  fifthSize,
  middleBarSize,
}: {
  center: Point;
  box: Box;
  fifthSize: number;
  middleBarSize: number;
}) => {
  const Bars: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  }[] = [
    {
      x1: center.x - fifthSize,
      x2: center.x + fifthSize,
      y1: box.min.y + middleBarSize,
      y2: box.min.y + middleBarSize,
    },
    {
      x1: center.x - fifthSize,
      x2: center.x + fifthSize,
      y1: center.y,
      y2: center.y,
    },
    {
      x1: center.x - fifthSize,
      x2: center.x + fifthSize,
      y1: box.max.y - middleBarSize,
      y2: box.max.y - middleBarSize,
    },
  ];
  return Bars;
};
