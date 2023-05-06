import {
  EntityControlBar,
  Grid,
  OnStashBoxRenderClick,
  RenderShadowBox,
  ToolBar,
} from "@/components";
import { SelectMemoryEntity } from "@/selectors";
import { InMemoryEntity } from "@/stores/EntityMoveReducer";
import { useEffect, useState } from "react";
import { Box } from "rebass";
import { type DesignPage as IDesignPage } from "./DesignPage.d";
import {
  EntityControlBarContainer,
  GridContainer,
  ToolBarContainer,
} from "./DesignPage.styled";

export const DesignPage = ({
  toolBarProps,
  gridProps,
  entityControlBarProps,
}: IDesignPage) => {
  const hasStash: boolean =
    SelectMemoryEntity().length > 0;
  const current: InMemoryEntity =
    SelectMemoryEntity()[0];
  const gridId = "design-grid-id";
  const [currentGridProps, setCurrentGridProps] =
    useState<DOMRect | null>(null);

  useEffect(() => {
    const element = document.querySelector(
      `#${gridId}`
    );
    if (element != null) {
      setCurrentGridProps(
        element.getBoundingClientRect()
      );
    }
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(28px, 6fr))",
        overflow: "none",
      }}
    >
      {current && currentGridProps && (
        <RenderShadowBox
          active={
            hasStash && current.entity != null
          }
          currentEntity={current}
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
        <EntityControlBar
          {...entityControlBarProps}
        />
      </EntityControlBarContainer>
    </Box>
  );
};
