import React, { Fragment } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

import "./CommandInput.css";

interface CommandInput {
  /**
   * How large it should be?
   */
  size?: "small" | "medium" | "large";
  /**
   * What caret color to use
   */
  caretColor?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What border color to use
   */
  borderColor?: string;
  /**
   * What content color to use
   */
  contentColor?: string;
  /**
   * Display keyboard key shortcut
   */
  shortcutKey: JSX.Element;
  /**
   * What placeholder to use
   */
  placeholder?: string;
}
/**
 * Like [Alfred](https://www.alfredapp.com/),
 * or Visual Studio Code ["Command Palette"](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette),
 * opens an input where commands can be found and triggered
 */
export const CommandInput = ({
  size = "medium",
  caretColor = "#F0DF87",
  backgroundColor = "#13474A",
  borderColor = "#F0DF87",
  contentColor = "#B4b4b4",
  shortcutKey = <></>,
  placeholder = "",
}: CommandInput): JSX.Element => {
  return (
    <Fragment>
      <div
        className="command-bar--container"
        style={{ backgroundColor, borderColor }}
      >
        <div className="command-bar--caret" style={{ color: caretColor }}>
          <AiOutlineCaretRight />
        </div>
        <div className="command-bar--input-group">
          <input
            type="text"
            name="command-bar--input"
            className={["command-bar--input", `command-bar--${size}`].join(" ")}
            style={{
              color: contentColor,
              backgroundColor,
              outlineColor: borderColor,
            }}
            placeholder={placeholder}
          />
        </div>
        <div className="command-bar--shortcut">{shortcutKey}</div>
      </div>
    </Fragment>
  );
};
