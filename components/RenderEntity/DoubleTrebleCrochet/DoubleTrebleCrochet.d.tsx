import { EntityTheme } from "@/stores";

export interface DoubleTrebleCrochet {
  /**
   * What position it have
   */
  position?: { x: number; y: number };
  /**
   * Line size
   */
  size?: number;
  /**
   * Which theme to use?
   */
  theme?: EntityTheme;
  /**
   * What angle to set
   */
  rotation?: number;
  /**
   * What padding to set
   */
  padding?: number;
  /**
   * What scale middle bars have,
   * ref to entity box and center
   */
  middlePadding?: number;
}
