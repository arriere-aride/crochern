import * as React from "react";

type unit = number | string;
interface Grid {
  /**
   * Cell is the most little atom in grid
   */
  cell: {
    size: unit;
    strokeColor: string;
    strokeWidth: unit;
  };
  /**
   * Separator separates cell
   */
  separator: {
    size: unit;
    strokeColor: string;
    strokeWidth: unit;
  };
  /**
   * Grid container
   */
  grid: {
    strokeColor: string;
    strokeWidth: unit;
    width: unit;
    height: unit;
  };
}

const Grid = ({
  cell = {
    strokeWidth: 0.5,
    strokeColor: "gray",
    size: 8,
  },
  separator = {
    strokeWidth: 1,
    strokeColor: "gray",
    size: 80,
  },
  grid = {
    strokeWidth: 0.5,
    strokeColor: "gray",
    width: 800,
    height: 800,
  },
}: Grid) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...grid}>
    <defs>
      <pattern
        id="a"
        width={cell.size}
        height={cell.size}
        patternUnits="userSpaceOnUse"
      >
        <path
          fill="none"
          stroke={cell.strokeColor}
          strokeWidth={cell.strokeWidth}
          d={`M${cell.size} 0H0v${cell.size}`}
        />
      </pattern>
      <pattern
        id="b"
        width={separator.size}
        height={separator.size}
        patternUnits="userSpaceOnUse"
      >
        <path
          fill="url(#a)"
          d={`M0 0h${separator.size}v${separator.size}H0z`}
        />
        <path
          fill="none"
          stroke={separator.strokeColor}
          strokeWidth={separator.strokeWidth}
          d={`M${separator.size} 0H0v${separator.size}`}
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#b)" />
  </svg>
);
export { Grid };
