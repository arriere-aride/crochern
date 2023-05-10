import { type Chain as IChain } from "./Chain.d";
import { ChainContainer } from "./Chain.styled";

/** Render Chain (maille en l’air) */
export const Chain = ({
  theme = {
    color: "#1a1a1a",
    strokeWidth: 0,
    backgroundColor: "transparent",
  },
  padding = 0,
  radius = { rx: 8, ry: 4 },
  size = 16,
  position = { x: 0, y: 0 },
}: IChain) => {
  const id: number = Math.floor(
    Math.random() * 100
  );
  const { rx, ry } = radius;
  const halfSize = Math.floor(size / 2);
  const { x, y } = position;
  const center = { x: halfSize, y: halfSize };
  const box = {
    min: { x: x + padding, y: y + padding },
    max: {
      x: center.x + halfSize - padding,
      y: center.y + halfSize - padding,
    },
  };

  return (
    <ChainContainer
      {...theme}
      x={x}
      y={y}
      width={box.max.x}
      height={box.max.y}
    >
      <g
        id={`render-item-ch--${id}`}
        strokeWidth={theme.strokeWidth}
      >
        <ellipse
          cx={center.x}
          cy={center.y}
          rx={rx}
          ry={ry}
        />
      </g>
    </ChainContainer>
  );
};
