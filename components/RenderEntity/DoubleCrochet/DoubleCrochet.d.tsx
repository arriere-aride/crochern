import { EntityTheme } from "@/stores";

export interface DoubleCrochet {
  /**
   * What theme to use?
   */
  theme?: EntityTheme;
  /**
   * What stroke width to set
   */
  strokeWidth?: number;
  /**
   * What position it have
   */
  position?: { x: number; y: number };
  /**
   * Line size
   */
  size?: number;
  /**
   * What angle to set
   */
  rotation?: number;
  /**
   * What padding to set
   */
  padding?: number;
}
