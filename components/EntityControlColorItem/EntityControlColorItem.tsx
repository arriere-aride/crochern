import {
  EntityControlColorSelector,
  useToggle,
} from "@/components";
import { Box, Flex } from "rebass";
import { type EntityControlColorItem as IEntityControlColorItem } from "./EntityControlColorItem.d";
import { ColorFiller } from "./EntityControlColorItem.styled";

/* Display an item under the form of color */
export const EntityControlColorItem = ({
  property = "prop",
  value = "value",
  theme = {},
  size = 16,
  colors = [],
  onClick = () => true,
}: IEntityControlColorItem): JSX.Element => {
  const [visible, toggle] = useToggle();
  return (
    <Flex
      flexWrap="wrap"
      mx={2}
      width={"100%"}
      style={{
        position: "relative",
        gridColumn: "span 2",
      }}
    >
      <Box
        width={1 / 3}
        justifyContent={"center"}
      >
        <span style={theme?.property}>
          {property}
        </span>
      </Box>
      <Box
        width={1 / 3}
        justifyContent={"center"}
      >
        <ColorFiller
          value={value}
          size={size}
          onClick={() => toggle()}
        />
      </Box>
      <Box
        width={1 / 3}
        justifyContent={"center"}
      >
        <span
          style={theme?.value}
          onClick={() => toggle()}
        >
          {value}
        </span>
      </Box>
      {visible && (
        <EntityControlColorSelector
          colors={colors}
          onClick={onClick}
        />
      )}
    </Flex>
  );
};
