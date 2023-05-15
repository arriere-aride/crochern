import {
  EntityControlBar,
  Grid,
  OnGridClick,
  OnStashBoxRenderClick,
  RenderPreFill,
  SplashScreen,
  ToolBar,
  useBoundingGrid,
  useToggle,
} from "@/components";
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
  const id = "design-grid-id";
  const [currentGridProps, setCurrentGridProps] =
    useBoundingGrid({ id });
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
        grid={currentGridProps as DOMRect}
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
        <Grid
          {...gridProps}
          id={id}
          onGridClick={OnGridClick}
        />
      </GridContainer>
      <EntityControlBarContainer>
        <EntityControlBar
          {...entityControlBarProps}
        />
      </EntityControlBarContainer>
    </Box>
  );
};
