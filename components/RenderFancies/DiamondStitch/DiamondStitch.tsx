import { type DiamondStitch as IDiamondStitch } from "./DiamondStitch.d";
import { DiamondStitchList } from "./DiamondStitch.data";
import { DiamondStitchSvg } from "./DiamondStitch.styled";

/**
 * Render Diamond Stitch
 * (point diamant)
 */
export const DiamondStitch = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: IDiamondStitch): JSX.Element => {
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
  const diamondStitchList = DiamondStitchList({
    box,
    padding,
    strokeWidth,
  });
  return (
    <DiamondStitchSvg
      id={`render-item-ds-box--1`}
      {...theme}
    >
      {diamondStitchList.map(
        (
          { pathD, rotate }: any,
          index: number
        ) => (
          <g
            key={index}
            id={`render-item-ds--${index}`}
            transform={rotate ?? ""}
          >
            <path d={pathD} />
          </g>
        )
      )}
      <ellipse
        cx={box.max.x - strokeWidth * 2}
        cy={strokeWidth + padding}
        ry={strokeWidth}
        rx={strokeWidth + padding}
        fill={"white"}
      />
    </DiamondStitchSvg>
  );
};
