import {
  EntityControlColorItem,
  EntityControlItem,
  OnEntityControlColorItemClick,
} from "@/components";
import store, { Store } from "@/stores";
import { useState } from "react";
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
  colors = [],
}: IEntityControlBar) => {
  const entity = useSelector(
    (state: Store) => state.selection.selection[0]
  );
  const [rerender, setRerender] = useState(false);
  store.subscribe(() => setRerender(!rerender));
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
        colors={colors}
        onClick={OnEntityControlColorItemClick}
      />
    </Flex>
  );
};
