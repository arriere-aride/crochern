import { EntityTheme } from "@/stores";

export interface ThreeSingleCrochetTogether {
  /**
   * What theme to use
   */
  theme?: EntityTheme;

  /**
   * Where to position
   */
  position?: {
    x: number;
    y: number;
  };
  /**
   * Line size
   */
  size?: number;

  padding?: number;
}
