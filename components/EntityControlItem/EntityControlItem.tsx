import { Box, Flex } from "rebass";

export const EntityControlItem = ({
  property = "prop",
  value = "value",
  theme = {},
}: {
  property: string;
  value: any;
  theme: any;
}) => (
  <Box width={1 / 2}>
    <Flex flexWrap="wrap" mx={2}>
      <Box
        width={1 / 2}
        justifyContent={"center"}
      >
        <span style={theme?.property}>
          {property}
        </span>
      </Box>
      <Box
        width={1 / 2}
        justifyContent={"center"}
      >
        <span style={theme?.value}>{value}</span>
      </Box>
    </Flex>
  </Box>
);
