import { EntityControlBar } from "@/components/EntityControlBar/EntityControlBar.d";
import { Grid } from "@/components/Grid/Grid.d";
import { ToolBar } from "@/components/ToolBar/ToolBar.d";

export interface DesignPage {
  toolBarProps: ToolBar;
  gridProps: Grid;
  entityControlBarProps: EntityControlBar;
}
