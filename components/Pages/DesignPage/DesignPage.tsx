import {
  type ToolBar as ToolBarProps,
  ToolBar,
} from "@/components/ToolBar/ToolBar";
import { type Grid as GridProps, Grid } from "@/components/Grid/Grid";
import {
  EntityControlBar as EntityControlBarProps,
  EntityControlBar,
} from "@/components/EntityControlBar/EntityControlBar";
import { Box } from "rebass";
import styled from "@emotion/styled";
import store from "@/stores/EntityMoveStore";

interface DesignPage {
  toolBarProps: ToolBarProps;
  gridProps: GridProps;
  entityControlBarProps: EntityControlBarProps;
}

const ToolBarContainer = styled.div`
  width: 28px;
  position: absolute;
  z-index: 20;
  height: 100vh;
  background-color: #484848;
`;
const GridContainer = styled.div`
  grid-column: span 3;
`;

const EntityControlBarContainer = styled.div``;

export const DesignPage = ({
  toolBarProps,
  gridProps,
  entityControlBarProps,
}: DesignPage) => {
  store.subscribe(() => console.log(store.getState()));
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(28px, 6fr))",
        overflow: "none",
      }}
    >
      <div>
        <ToolBarContainer>
          <ToolBar {...toolBarProps} />
        </ToolBarContainer>
      </div>
      <GridContainer>
        <Grid {...gridProps} />
      </GridContainer>
      <EntityControlBarContainer>
        <EntityControlBar {...entityControlBarProps} />
      </EntityControlBarContainer>
    </Box>
  );
};
