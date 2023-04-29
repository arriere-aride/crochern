/* eslint-disable react/jsx-key */
import React, { Children, Fragment, cloneElement } from "react";
import { Box } from "rebass";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { usePressKey, useToggle } from "../hooks";

interface ToolBar {
  /**
   * What tools to use
   */
  tools?: { entity: JSX.Element | React.ReactNode; label: string }[];
  /**
   * Which size each tool have
   */
  toolSize?: number;
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
  toolSize = 24,
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
  const cellSize = `${toolSize + padding}px`;
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
        <div key={`toolBar-tool-${index}`} style={{ height: toolSize }}>
          {Children.map(tool.entity, (entity) => (
            <div
              key={`toolBar-tool-entity-${index}`}
              style={{ height: toolSize }}
            >
              <Tooltip
                anchorSelect={`.anchor-${index}`}
                place="right"
                style={{ backgroundColor }}
              >
                {tool.label}
              </Tooltip>
              <a
                className={`anchor-${index}`}
                style={{ display: "inline-block", height: toolSize }}
              >
                <svg style={{ padding }} width="100%" height="100%">
                  {cloneElement(entity as any, {
                    onClick: (e: any) => onClick({ e, index }),
                    fillColor,
                    backgroundColor,
                    size: 24 - padding,
                  })}
                </svg>
              </a>
            </div>
          ))}
        </div>
      ))}
    </Box>
  );
};
