import {
  usePressKey,
  useToggle,
} from "@@/components/hooks";
import { Fragment } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { type CommandBar as ICommandBar } from "./CommandBar.d";
import {
  CommandBarCaret,
  CommandBarContainer,
  CommandBarInput,
  CommandBarInputGroup,
  CommandBarShortCut,
  commandBarInputSizes,
} from "./CommandBar.styled";

/**
 * Like [Alfred](https://www.alfredapp.com/),
 * or Visual Studio Code ["Command Palette"](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette),
 * opens an input where commands can be found and triggered
 */
export const CommandBar = ({
  size = "medium",
  caretColor = "#F0DF87",
  backgroundColor = "#13474A",
  borderColor = "#F0DF87",
  contentColor = "#B4b4b4",
  shortcutKey = <></>,
  placeholder = "",
  toggleKey = "F1",
  isVisible = false,
}: ICommandBar): JSX.Element => {
  const [visible, setVisible] =
    useToggle(isVisible);
  const onKeyPress = (event: any) => {
    setVisible();
  };

  usePressKey([toggleKey.toString()], onKeyPress);

  return (
    <Fragment>
      <CommandBarContainer
        data-testid="command-bar"
        style={{
          backgroundColor,
          borderColor,
          visibility: visible
            ? "visible"
            : "hidden",
        }}
      >
        <CommandBarCaret
          style={{ color: caretColor }}
        >
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
        <CommandBarShortCut>
          {shortcutKey}
        </CommandBarShortCut>
      </CommandBarContainer>
    </Fragment>
  );
};
