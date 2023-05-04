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
import { useEffect, useState } from "react";
import { RenderShadowBox } from "@/components/RenderShadowBox/RenderShadowBox";
import { OnStashBoxRenderClick } from "@/components/Events";

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
  const gridId = "design-grid-id";
  const [currentGridProps, setCurrentGridProps] = useState<DOMRect | null>(
    null
  );

  useEffect(() => {
    const element = document.querySelector(`#${gridId}`);

    if (element != null) {
      setCurrentGridProps(element.getBoundingClientRect());
    }
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(28px, 6fr))",
        overflow: "none",
      }}
    >
      {current?.entity && currentGridProps && (
        <RenderShadowBox
          active={stash && current.entity}
          entity={current.entity}
          grid={currentGridProps}
          onDocumentClick={OnStashBoxRenderClick}
        />
      )}
      <div>
        <ToolBarContainer>
          <ToolBar {...toolBarProps} />
        </ToolBarContainer>
      </div>
      <GridContainer>
        <Grid {...gridProps} id={gridId} />
      </GridContainer>
      <EntityControlBarContainer>
        <EntityControlBar {...entityControlBarProps} />
      </EntityControlBarContainer>
    </Box>
  );
};
