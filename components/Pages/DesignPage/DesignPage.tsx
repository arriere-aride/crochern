import {
  EntityControlBar,
  Grid,
  OnStashBoxRenderClick,
  RenderPreFill,
  SplashScreen,
  ToolBar,
  useToggle,
} from "@/components";
import { useEffect, useState } from "react";
import { Box } from "rebass";
import { type DesignPage as IDesignPage } from "./DesignPage.d";
import {
  DesignPageStyle,
  EntityControlBarContainer,
  GridContainer,
  SplashScreenContainer,
  ToolBarContainer,
} from "./DesignPage.styled";

export const DesignPage = ({
  toolBarProps,
  gridProps,
  entityControlBarProps,
  splashScreenProps,
}: IDesignPage) => {
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
  const [visible, toggleVisible] =
    useToggle(true);

  return (
    <Box sx={DesignPageStyle}>
      <SplashScreenContainer visible={visible}>
        <SplashScreen
          {...splashScreenProps}
          onClick={toggleVisible}
        />
      </SplashScreenContainer>
      <RenderPreFill
        grid={currentGridProps}
        OnStashBoxRenderClick={
          OnStashBoxRenderClick
        }
      />
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
