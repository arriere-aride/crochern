import { ToolBarItem } from "@/components";
import {
  usePressKey,
  useToggle,
} from "@/components/hooks";
import "react-tooltip/dist/react-tooltip.css";
import { Box } from "rebass";
import { type ToolBar as IToolBar } from "./ToolBar.d";
import { toolBarStyle } from "./ToolBar.styled";

/**
 *  Like [adobe photoshop](https://www.adobe.com/fr/products/photoshop.html),
 *  left side-bar is showing tools that user can stitch with.
 */
export const ToolBar = ({
  tools = [],
  handleClick = () => true,
  theme = {
    backgroundColor: "#484848",
    color: "#7F7F80",
  },
  borderColor = "#008C9E",
  toolSize = 24,
  padding = 4,
  toggleKey,
  isVisible = true,
}: IToolBar): JSX.Element => {
  const [visible, setVisible] =
    useToggle(isVisible);

  const onKeyPress = (_: any) => {
    if (toggleKey != null) {
      setVisible();
    }
  };
  usePressKey(
    [toggleKey?.toString()],
    onKeyPress
  );

  return (
    <Box
      sx={toolBarStyle({
        theme,
        borderColor,
        cellSize: toolSize + padding,
        visible,
      })}
    >
      {tools.map((tool, index: number) => (
        <ToolBarItem
          key={`toolbar-item-${index}`}
          theme={theme}
          index={index}
          size={toolSize}
          item={tool}
          padding={padding}
          handleClick={handleClick}
        />
      ))}
    </Box>
  );
};
