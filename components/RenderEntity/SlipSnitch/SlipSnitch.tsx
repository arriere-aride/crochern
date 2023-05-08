import styled from "@emotion/styled";

interface SlipSnitch {
  /**
   * What stroke width to set
   */
  strokeWidth?: number;
  /**
   * What fill color to use
   */
  fillColor?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What stroke color to use
   */
  strokeColor?: string;
  /**
   * What padding to set
   */
  padding?: number;
  /**
   * Box size
   */
  size?: number;
  /**
   * What radius to use
   */
  radius?: number;
  /**
   * Where to position
   */
  position?: {
    cx: number;
    cy: number;
  };
}

/** Render Snitch (maille coulée) */
export const SlipSnitch = ({
  fillColor = "#1a1a1a",
  strokeColor = "transparent",
  radius = 8,
  size = 16,
  padding = 0,
  position = { cx: 0, cy: 0 },
  strokeWidth = 0,
}: SlipSnitch) => {
  const id: number = Math.floor(
    Math.random() * 100
  );
  const r = Math.floor(radius / 2);
  const halfSize = Math.floor(size / 2);
  const { cx: x, cy: y } = position;
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

  const SlipSnitchContainer = styled.svg`
    stroke: ${strokeColor};
    fill: ${fillColor};
  `;
  return (
    <SlipSnitchContainer
      x={x}
      y={y}
      width={box.max.x}
      height={box.max.y}
    >
      <g
        id={`render-item-slst--${id}`}
        strokeWidth={strokeWidth}
      >
        <circle
          cx={center.x}
          cy={center.y}
          r={r}
        />
      </g>
    </SlipSnitchContainer>
  );
};
