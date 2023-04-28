/* eslint-disable react/jsx-key */
import React, { Children, Fragment, cloneElement } from "react";
import { Box } from "rebass";

import { usePressKey, useToggle } from "../hooks";

interface ToolBar {
  /**
   * What tools to use
   */
  tools?: JSX.Element[] | React.ReactNode[];
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What content color to use
   */
  fillColor?: string;
  /**
   * What border color to use
   */
  borderColor?: string;
  /**
   * Which padding to use?
   */
  padding?: number;
  /**
   * dispatch onClick event
   * @param props any
   * @returns any
   */
  onClick: ({ e, index, ...props }: any) => any;
  /**
   * What key to use in order to toggle
   */
  toggleKey?: string;
  /**
   * What visibility by default?
   */
  isVisible?: boolean;
}

/**
 *  Like [adobe photoshop](https://www.adobe.com/fr/products/photoshop.html),
 *  left side-bar is showing tools that user can stitch with.
 */
export const ToolBar = ({
  tools = [],
  onClick = () => true,
  backgroundColor = "#484848",
  fillColor = "#7F7F80",
  borderColor = "#008C9E",
  padding = 4,
  toggleKey,
  isVisible = true,
}: ToolBar): JSX.Element => {
  const [visible, setVisible] = useToggle(isVisible);

  const onKeyPress = (_: any) => {
    if (toggleKey != null) {
      setVisible();
    }
  };
  usePressKey([toggleKey?.toString()], onKeyPress);
  const cellSize = `${24 + padding}px`;

  return (
    <Box
      sx={{
        display: "grid",
        gridGap: 2,
        gridTemplateColumns: `repeat(auto-fit, minmax(${cellSize}, 1fr))`,
        gridAutoRows: cellSize,
        backgroundColor,
        borderColor,
        color: fillColor,
        visibility: visible ? "visible" : "hidden",
      }}
    >
      {tools.map((tool, index: number) => (
        <svg style={{ padding }}>
          {Children.map(tool, (entity) =>
            cloneElement(entity as any, {
              onClick: (e: any) => onClick({ e, index }),
              fillColor,
              backgroundColor,
              size: 24 - padding,
            })
          )}
        </svg>
      ))}
    </Box>
  );
};
