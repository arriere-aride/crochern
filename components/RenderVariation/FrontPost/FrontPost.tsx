import { type FrontPost as IFrontPost } from "./FrontPost.d";

/** Render Front post (Relief avant) */
export const FrontPost = ({
  fillColor = "#1a1a1a",
  outterFillColor = "#ffffff",
  position = { x: 0, y: 0 },
  size = 16,
  debug = false,
  strokeWidth = 2,
  padding = 1,
  ...props
}: IFrontPost) => {
  const id: string = Math.floor(
    Math.random() * 100
  ).toString();
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const tierceSize = Math.floor(size / 3);
  const quarterSize = Math.floor(size / 4);
  const fifthSize = Math.floor(size / 5);
  const seventhSize = Math.floor(size / 7);
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
  const curve: { x: string; y: string }[] = [
    {
      x: `${center.x + fifthSize}`,
      y: `${box.max.y - quarterSize}`,
    },
    {
      x: `${center.x + fifthSize}`,
      y: `${box.max.y - seventhSize}`,
    },
  ];

  return (
    <g
      id={`render-item-fp--${id}`}
      stroke={fillColor}
      strokeWidth={strokeWidth}
      fill="transparent"
    >
      <path
        fill={outterFillColor}
        d={`M ${center.x - padding} ${
          box.max.y - tierceSize
        } C ${curve[0].x} ${curve[0].y}, ${
          curve[1].x
        } ${curve[1].y}, ${center.x - padding} ${
          box.max.y
        } `}
      />
      {debug && (
        <g
          id={`debug-render-item-flo--${id}`}
          fill="red"
          strokeWidth={0}
        >
          <circle
            cx={curve[0].x}
            cy={curve[0].y}
            r={1}
          />
          <circle
            cx={curve[1].x}
            cy={curve[1].y}
            r={1}
          />
        </g>
      )}
    </g>
  );
};
