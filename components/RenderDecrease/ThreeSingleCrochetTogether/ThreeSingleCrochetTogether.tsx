interface ThreeSingleCrochetTogether {
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

/** Render Three Single Crochet in One Stitch  (3 Mailles Serrées dans la même Maille) */
export const ThreeSingleCrochetTogether = ({
  fillColor = "#1a1a1a",
  position = { x: 50, y: 50 },
  size = 16,
}: ThreeSingleCrochetTogether) => {
  const id: string = Math.floor(
    Math.random() * 100
  ).toString();
  const { x, y } = position;
  const tierceSize = Math.floor(size / 3);
  const padding = 2;

  return (
    <g
      id={`render-item-thscoc--${id}`}
      stroke={fillColor}
      strokeWidth={2}
    >
      <g id={`render-item-thscoc-sc--${id}`}>
        <line
          x1={x - tierceSize}
          y1={y + tierceSize * 2 + padding}
          x2={x + tierceSize}
          y2={y + tierceSize * 2 + padding}
        />
        <line
          x1={x}
          y1={y + tierceSize + padding}
          x2={x}
          y2={y + size}
        />
      </g>
      <g
        id={`render-item-thscoc-container--${id}`}
      >
        <path
          d={`M ${x} ${y} ${x - size} ${
            y + size
          } `}
        />
        <path
          d={`M ${x} ${y} ${x + size} ${
            y + size
          } `}
        />
        <path
          d={`M ${x} ${y - 1} ${x} ${
            y + tierceSize
          }`}
        />
      </g>
    </g>
  );
};
