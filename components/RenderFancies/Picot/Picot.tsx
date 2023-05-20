import { type Picot as IPicot } from "./Picot.d";
import { PicotSvg } from "./Picot.styled";

/**
 * Render Diamond Stitch
 * (point diamant)
 */
export const Picot = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 2,
    backgroundColor: "transparent",
  },
  position = { x: 0, y: 0 },
  size = 16,
  padding = 1,
}: IPicot): JSX.Element => {
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

  return (
    <PicotSvg
      id={`render-item-ds-box--1`}
      {...theme}
    >
      <g fill={"white"}>
        <ellipse
          cx={center.x}
          cy={box.min.y + strokeWidth}
          ry={strokeWidth}
          rx={strokeWidth + padding}
        />
        <ellipse
          cx={box.min.x + strokeWidth}
          cy={center.y}
          rx={strokeWidth}
          ry={strokeWidth + padding}
        />
        <ellipse
          cx={box.max.x - strokeWidth}
          cy={center.y}
          rx={strokeWidth}
          ry={strokeWidth + padding}
        />
        <circle
          cx={center.x}
          cy={box.max.y - strokeWidth}
          r={strokeWidth}
          fill={theme.color}
        />
      </g>
    </PicotSvg>
  );
};
