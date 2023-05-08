interface TwoSingleCrochetTogether {
  /**
   * What fill color to use
   */
  fillColor?: string;

  /**
   * Where to position
   */
  position?: {
    x: number;
    y: number;
  };
  /**
   * Line size
   */
  size?: number;
}

/** Render Two Single Together  (2 Mailles Serrées écoulées ensemble) */
export const TwoSingleCrochetTogether = ({
  fillColor = "#1a1a1a",
  position = { x: 50, y: 50 },
  size = 16,
}: TwoSingleCrochetTogether) => {
  const id: string = Math.floor(
    Math.random() * 100
  ).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const tierceSize = Math.floor(size / 3);
  const padding = 1;

  return (
    <g
      id={`render-item-tscoc--${id}`}
      stroke={fillColor}
      strokeWidth={2}
    >
      <g
        id={`render-item-tscoc-sc--${id}`}
        style={{
          transformOrigin: "center",
          transformBox: "fill-box",
        }}
      >
        <line
          x1={x - tierceSize + padding}
          y1={y - tierceSize + padding}
          x2={x + tierceSize - padding}
          y2={y - tierceSize + padding}
        />
        <line
          x1={x}
          y1={y - halfSize - padding}
          x2={x}
          y2={y}
        />
      </g>
      <g
        id={`render-item-tscoc-container--${id}`}
      >
        <path
          d={`M ${x - halfSize} ${y} ${x} ${
            y - size
          } `}
        />
        <path
          d={`M ${x + halfSize} ${y} ${x} ${
            y - size
          } `}
        />
      </g>
    </g>
  );
};
