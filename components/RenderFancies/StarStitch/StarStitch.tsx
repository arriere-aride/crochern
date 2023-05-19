import { type StarStitch as IStarStitch } from "./StarStitch.d";
import { StarStitchList } from "./StarStitch.data";
import { StarStitchSvg } from "./StarStitch.styled";

/**
 * Render Star Stitch
 * (point étoile)
 */
export const StarStitch = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: IStarStitch): JSX.Element => {
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const center = {
    x: x + halfSize,
    y: y + halfSize,
  };
  const strokeWidth = theme.strokeWidth ?? 2;
  const box = {
    min: { x: x + padding, y: y + padding },
    max: {
      x: center.x + halfSize - padding,
      y: center.y + halfSize - padding,
    },
  };
  const starStitchList = StarStitchList({
    box,
    padding,
    strokeWidth,
  });
  return (
    <StarStitchSvg
      id={`render-item-sp--1`}
      {...theme}
    >
      {starStitchList.map(
        (
          { pathD, rotate }: any,
          index: number
        ) => (
          <g
            key={index}
            id={`render-item-tdcos--${index}`}
            transform={rotate ?? ""}
          >
            <path d={pathD} />
          </g>
        )
      )}
      <circle
        cx={strokeWidth + padding}
        cy={strokeWidth + padding}
        r={strokeWidth}
        fill={"white"}
      />
    </StarStitchSvg>
  );
};
