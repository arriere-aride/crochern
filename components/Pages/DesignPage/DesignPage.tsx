import { useSelector } from "react-redux";
import { Box } from "rebass";
import styled from "@emotion/styled";
import {
  type ToolBar as ToolBarProps,
  ToolBar,
} from "@/components/ToolBar/ToolBar";
import { type Grid as GridProps, Grid } from "@/components/Grid/Grid";
import {
  EntityControlBar as EntityControlBarProps,
  EntityControlBar,
} from "@/components/EntityControlBar/EntityControlBar";
import store from "@/stores/EntityMoveStore";
import { RenderShadowBox } from "@/components/RenderShadowBox/RenderShadowBox";

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
  const stash = useSelector((state: any) => state.memory.length > 0);
  const current = useSelector((state: any) => state.memory[0]);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(28px, 6fr))",
        overflow: "none",
      }}
    >
      {current?.entity && (
        <RenderShadowBox
          active={stash && current.entity}
          entity={current.entity}
        />
      )}
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
