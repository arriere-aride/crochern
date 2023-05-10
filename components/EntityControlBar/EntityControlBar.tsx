import {
  EntityControlColorItem,
  EntityControlItem,
} from "@/components";
import { Store } from "@/stores";
import { useSelector } from "react-redux";
import { Flex } from "rebass";
import { type EntityControlBar as IEntityControlBar } from "./EntityControlBar.d";

export const EntityControlBar = ({
  theme = {
    bar: {
      backgroundColor: "#484848",
      height: "100%",
      paddingTop: "1rem",
    },
    property: {
      fontWeight: 800,
      color: "#888",
    },
    value: {
      color: "#b1b1b1",
    },
  },
}: IEntityControlBar) => {
  const entity = useSelector(
    (state: Store) => state.selection.selection[0]
  );
  if (entity == null) {
    return <></>;
  }
  return (
    <Flex flexWrap="wrap" style={theme.bar}>
      <EntityControlItem
        theme={theme}
        value={Math.floor(entity.position.x)}
        property="X"
      />
      <EntityControlItem
        theme={theme}
        value={Math.floor(entity.position.y)}
        property="Y"
      />
      <EntityControlColorItem
        theme={theme}
        value={entity.theme.color}
        property="COLOR"
      />
    </Flex>
  );
};
