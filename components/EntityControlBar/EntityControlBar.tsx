import { Box, Flex } from "rebass";

export interface EntityControlBar {
  theme?: any;
  // theme?: { [index: string]: any };
  entity?: {
    name: string;
    props: {
      x: number;
      y: number;
      rotation: number;
      color: string;
      size: number;
      scale: number;
    };
  };
}

const EntityControlItem = ({
  property,
  value,
  theme,
}: {
  property: string;
  value: any;
  theme: any;
}) => {
  return (
    <Box width={1 / 2}>
      <Flex flexWrap="wrap" mx={2}>
        <Box width={1 / 2} justifyContent={"center"}>
          <span style={theme.property}>{property}</span>
        </Box>
        <Box width={1 / 2} justifyContent={"center"}>
          <span style={theme.value}>{value}</span>
        </Box>
      </Flex>
    </Box>
  );
};

export const EntityControlBar = ({
  theme = {
    property: {
      fontWeight: 800,
      color: "#444",
    },
    value: {
      color: "#b1b1b1",
    },
  },
  entity = {
    name: "Chain",
    props: {
      x: 0,
      y: 0,
      rotation: 0,
      color: "#1a1a1a",
      size: 16,
      scale: 1,
    },
  },
}) => {
  return (
    <Flex flexWrap="wrap" mx={2}>
      <EntityControlItem theme={theme} value={entity.props.x} property="X" />
      <EntityControlItem theme={theme} value={entity.props.y} property="Y" />
      <EntityControlItem
        theme={theme}
        value={entity.props.size}
        property="SIZE"
      />
      <EntityControlItem
        theme={theme}
        value={entity.props.rotation}
        property="ROTATION"
      />
      <EntityControlItem
        theme={theme}
        value={entity.props.scale}
        property="SCALE"
      />
    </Flex>
  );
};
