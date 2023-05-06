import store, { Store } from "@/stores";
import { useSelector } from "react-redux";
import { Flex } from "rebass";
import { EntityControlItem } from "../EntityControlItem/EntityControlItem";
import { type EntityControlBar as IEntityControlBar } from "./EntityControlBar.d";

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
}: IEntityControlBar) => {
  store.subscribe(() =>
    console.log(store.getState())
  );
  const entity = useSelector(
    (state: Store) => state.selection.selection[0]
  );
  if (entity == null) {
    return <></>;
  }
  return (
    <Flex flexWrap="wrap">
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
      {/* <EntityControlItem
        theme={theme}
        value={entity.size}
        property="SIZE"
      />
      <EntityControlItem
        theme={theme}
        value={entity.rotation}
        property="ROTATION"
      />
      <EntityControlItem
        theme={theme}
        value={entity.scale}
        property="SCALE"
      /> */}
    </Flex>
  );
};
