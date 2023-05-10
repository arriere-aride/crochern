import { EntityTheme } from "@/stores";

export interface TrebleCrochet {
  /**
   * What theme to use?
   */
  theme?: EntityTheme;
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
  /**
   * What scale middle bars have, ref to entity size
   */
  middlePadding?: number;
}
