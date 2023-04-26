import React, { Fragment } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import styled from "@emotion/styled";

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

const CommandBarContainer = styled.div`
  position: relative;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  width: 100%;
  max-width: 480px;
`;
const CommandBarCaret = styled.div`
  position: absolute;
  left: 4px;
  top: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const CommandBarInputGroup = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const CommandBarInput = styled.input`
  padding-left: 24px;
  width: 100%;
  height: 100%;
  border: 0;
  text-transform: uppercase;
  outline: thick double;
  font-weight: 700;
`;
const CommandBarShortCut = styled.div`
  position: absolute;
  right: 6px;
  top: 0;
  bottom: 0;
  display: flex;
  justify-items: end;
  align-items: center;
`;

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
  const commandBarInputSizes = {
    small: {
      fontSize: "12px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    medium: {
      fontSize: "14px",
      paddingTop: "11px",
      paddingBottom: "11px",
    },
    large: {
      fontSize: "16px",
      paddingTop: "12px",
      paddingBottom: "12px",
    },
  };
  return (
    <Fragment>
      <CommandBarContainer style={{ backgroundColor, borderColor }}>
        <CommandBarCaret style={{ color: caretColor }}>
          <AiOutlineCaretRight />
        </CommandBarCaret>
        <CommandBarInputGroup>
          <CommandBarInput
            type="text"
            name="command-bar--input"
            style={{
              color: contentColor,
              backgroundColor,
              outlineColor: borderColor,
              ...commandBarInputSizes[size],
            }}
            placeholder={placeholder}
          />
        </CommandBarInputGroup>
        <CommandBarShortCut>{shortcutKey}</CommandBarShortCut>
      </CommandBarContainer>
    </Fragment>
  );
};
