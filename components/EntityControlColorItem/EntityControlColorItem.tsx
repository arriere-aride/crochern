import { Box, Flex } from "rebass";
import { type EntityControlColorItem as IEntityControlColorItem } from "./EntityControlColorItem.d";
import { ColorFiller } from "./EntityControlColorItem.styled";

/* Display an item under the form of color */
export const EntityControlColorItem = ({
  property = "prop",
  value = "value",
  theme = {},
  size = 16,
}: IEntityControlColorItem): JSX.Element => (
  <Flex flexWrap="wrap" mx={2} width={"100%"}>
    <Box width={1 / 3} justifyContent={"center"}>
      <span style={theme?.property}>
        {property}
      </span>
    </Box>
    <Box width={1 / 3} justifyContent={"center"}>
      <ColorFiller value={value} size={size} />
    </Box>
    <Box width={1 / 3} justifyContent={"center"}>
      <span style={theme?.value}>{value}</span>
    </Box>
  </Flex>
);
