export default function SelectPointPositionInGrid({
  grid,
  point = { x: 0, y: 0 },
  padding = 4,
}: {
  point?: { x: number; y: number };
  grid?: DOMRect;
  padding?: number;
}): [number, number] {
  return [
    grid
      ? point.x - grid.left + padding
      : point.x,
    grid ? point.y - grid.top : point.y,
  ];
}
