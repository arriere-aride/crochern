import { type TwoDoubleCrochetOneStitch as ITwoDoubleCrochetOneStitch } from "./TwoDoubleCrochetOneStitch.d";

/** Render Two Double Crochet in One Stitch
 *  (2 Brides dans la même Maille) */
export const TwoDoubleCrochetOneStitch = ({
  theme = {
    fillColor: "#1a1a1a",
    strokeWidth: 2,
  },
  position = { x: 0, y: 0 },
  padding = 1,
  size = 16,
}: ITwoDoubleCrochetOneStitch) => {
  const { x, y } = position;
  const halfSize = Math.floor(size / 2);
  const tierceSize = Math.floor(size / 3);
  const sixthSize = Math.floor(size / 6);
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

  const doubleCrochetList = [
    {
      pathD: `M ${
        box.min.x + theme.strokeWidth
      } ${center.y} ${
        box.min.x + halfSize - theme.strokeWidth
      } ${center.y} `,
      rotate: `rotate(${-15})`,
    },
    {
      pathD: `M ${
        box.max.x - theme.strokeWidth
      } ${center.y} ${
        box.max.x - halfSize + theme.strokeWidth
      } ${center.y} `,

      rotate: `rotate(${15})`,
    },
  ];

  return (
    <g id={`render-item-tdcos--1`} {...theme}>
      <path
        d={`M ${center.x} ${box.max.y} ${
          box.min.x + sixthSize
        } ${box.min.y} `}
      />
      <path
        d={`M ${box.min.x} ${box.min.y} ${
          box.min.x + tierceSize
        } ${box.min.y} `}
      />
      {doubleCrochetList.map(
        (
          { pathD, rotate }: any,
          index: number
        ) => (
          <g
            key={index}
            id={`render-item-tdcos-bar-${index}`}
            transform={rotate}
            style={{
              transformOrigin: "center",
              transformBox: "fill-box",
            }}
          >
            <path d={pathD} />
          </g>
        )
      )}
    </g>
  );
};
