import { type TwoSingleCrochetTogether as ITwoSingleCrochetTogether } from "./TwoSingleCrochetTogether.d";
import { TwoSingleCrochetTogetherSvg } from "./TwoSingleCrochetTogether.styled";

/**
 * Render Two Single Together
 * (2 Mailles Serrées écoulées ensemble)
 */
export const TwoSingleCrochetTogether = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: ITwoSingleCrochetTogether) => {
  const { x, y } = position;
  const doubleStrokeWidth =
    (theme.strokeWidth ?? 1) * 2;
  const halfSize = Math.floor(size / 2);
  const center = {
    x: x + halfSize,
    y: y + halfSize,
  };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: {
      x: center.x + halfSize - padding,
      y: center.y + halfSize - padding,
    },
  };

  return (
    <TwoSingleCrochetTogetherSvg
      id={`render-item-tsct--1`}
      {...theme}
    >
      <g
        id={`render-item-tsct-sc--1`}
        stroke={theme.color}
        strokeWidth={theme.strokeWidth}
      >
        <line
          x1={box.min.x + doubleStrokeWidth}
          y1={center.y}
          x2={box.max.x - doubleStrokeWidth}
          y2={center.y}
        />
        <line
          x1={center.x}
          y1={box.min.y + doubleStrokeWidth}
          x2={center.x}
          y2={box.max.y - doubleStrokeWidth}
        />
      </g>
      <g id={`render-item-tsct-container--1`}>
        <path
          d={`M ${center.x} ${box.min.y} ${box.min.x} ${center.y} `}
        />
        <path
          d={`M ${center.x} ${box.min.y} ${box.max.x} ${center.y} `}
        />
      </g>
    </TwoSingleCrochetTogetherSvg>
  );
};
