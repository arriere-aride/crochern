import {
  EntityControlColorItem,
  EntityControlItem,
  OnEntityControlColorItemClick,
} from "@/components";
import store, { Store } from "@/stores";
import { useState } from "react";
import { useSelector } from "react-redux";
import { type EntityControlBar as IEntityControlBar } from "./EntityControlBar.d";
import { EntityControlBarLine } from "./EntityControlBar.styled";

export const EntityControlBar = ({
  theme = {
    bar: {
      backgroundColor: "#484848",
      height: "100%",
      paddingTop: "1rem",
    },
    line: {
      borderBottom: "1px solid #353535",
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
    <div style={theme.bar}>
      <EntityControlBarLine {...theme.line}>
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
      </EntityControlBarLine>
      <EntityControlBarLine {...theme.line}>
        <EntityControlColorItem
          theme={theme}
          value={entity.theme.color}
          property="COLOR"
          colors={colors}
          onClick={OnEntityControlColorItemClick}
        />
      </EntityControlBarLine>
    </div>
  );
};
