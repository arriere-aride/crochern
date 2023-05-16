import { type ThreeSingleCrochetTogether as IThreeSingleCrochetTogether } from "./ThreeSingleCrochetTogether.d";
import { ThreeSingleCrochetTogetherContainer } from "./ThreeSingleCrochetTogether.styled";

/** Render Three Single Crochet in One Stitch
 * (3 Mailles Serrées dans la même Maille)
 */
export const ThreeSingleCrochetTogether = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: IThreeSingleCrochetTogether): JSX.Element => {
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const strokeWidth = theme.strokeWidth || 1;
  const doubleStrokeWidth = strokeWidth * 2;
  const tripleStrokeWidth = strokeWidth * 3;
  const quadStrokeWidth = strokeWidth * 4;

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
    <ThreeSingleCrochetTogetherContainer
      id={`render-item-thsct--1`}
      {...theme}
    >
      <g
        id={`render-item-thsct-sc--1`}
        stroke={theme.color}
        strokeWidth={strokeWidth}
      >
        <line
          x1={box.min.x + doubleStrokeWidth}
          y1={center.y + doubleStrokeWidth}
          x2={box.max.x - doubleStrokeWidth}
          y2={center.y + doubleStrokeWidth}
        />
        <line
          x1={center.x}
          y1={box.min.y + quadStrokeWidth}
          x2={center.x}
          y2={box.max.y}
        />
      </g>
      <g
        id={`render-item-thsct-container--1`}
        stroke={theme.color}
        strokeWidth={strokeWidth}
      >
        <path
          d={`M ${center.x} ${box.min.y} ${box.min.x} ${center.y}`}
        />
        <path
          d={`M ${center.x} ${box.min.y} ${box.max.x} ${center.y}`}
        />
        <path
          d={`M ${center.x} ${box.min.y} V ${
            box.min.y + tripleStrokeWidth
          }`}
        />
      </g>
    </ThreeSingleCrochetTogetherContainer>
  );
};
