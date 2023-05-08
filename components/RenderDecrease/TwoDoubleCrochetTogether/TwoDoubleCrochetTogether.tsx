import { DoubleCrochet } from "@@/components/RenderEntity";

interface TwoDoubleCrochetTogether {
  /**
   * What fill color to use
   */
  fillColor?: string;

  /**
   * Where to position both dc
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

/** Render Two Double Crochet Together  (2 Brides écoulées ensemble) */
export const TwoDoubleCrochetTogether = ({
  fillColor = "#1a1a1a",
  position = { x: 50, y: 50 },
  size = 16,
}: TwoDoubleCrochetTogether) => {
  const id: string = Math.floor(
    Math.random() * 100
  ).toString();
  const { x, y } = position;
  const rotate = [
    `rotate(${135})`,
    `rotate(-${135})`,
  ];
  const tierceSize = Math.floor(size / 3);

  return (
    <g>
      <svg x={x + tierceSize} y={y}>
        <g
          key={`render-item-dcoc-1-${id}`}
          stroke={fillColor}
          strokeWidth={2}
          transform={rotate[0]}
          style={{
            transformOrigin: "center",
            transformBox: "fill-box",
          }}
        >
          <DoubleCrochet
            size={16}
            rotation={15}
          />
        </g>
      </svg>
      <svg x={x - tierceSize} y={y}>
        <g
          key={`render-item-dcoc-1-${id}`}
          stroke={fillColor}
          strokeWidth={2}
          transform={rotate[1]}
          style={{
            transformOrigin: "center",
            transformBox: "fill-box",
          }}
        >
          <DoubleCrochet
            size={16}
            rotation={15}
          />
        </g>
      </svg>
    </g>
  );
};
