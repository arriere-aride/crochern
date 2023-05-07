import { EntityControlBar } from "@/components/EntityControlBar/EntityControlBar.d";
import { Grid } from "@/components/Grid/Grid.d";
import { SplashScreen } from "@/components/SplashScreen/SplashScreen.d";
import { ToolBar } from "@/components/ToolBar/ToolBar.d";

export interface DesignPage {
  toolBarProps?: ToolBar;
  gridProps?: Grid;
  entityControlBarProps?: EntityControlBar;
  splashScreenProps?: SplashScreen;
}
