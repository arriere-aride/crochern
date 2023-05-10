import { EntityTheme } from "@/stores";

export interface SingleCrochet {
  /**
   * Whate theme to use?
   */
  theme?: EntityTheme;
  /**
   * Where to put entity
   */
  position?: {
    x: number;
    y: number;
  };
  /**
   * Line size
   */
  size?: number;
  /**
   * Rotating piece, in degrees
   */
  rotation?: number;
  /**
   * What padding to set
   */
  padding?: number;
}
