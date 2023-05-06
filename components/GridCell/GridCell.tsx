export type unit = number | string;
export interface GridCell {
  size: unit;
  stroke: string;
  strokeWidth: unit;
  id?: string;
}

export const GridCell = ({
  size,
  stroke,
  strokeWidth,
  id,
}: GridCell) => (
  <pattern
    id={id}
    width={size}
    height={size}
    patternUnits="userSpaceOnUse"
  >
    <path
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      d={`M${size} 0H0v${size}`}
    />
  </pattern>
);
