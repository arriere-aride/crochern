import { EntityTheme } from "@/stores";

export interface SingleCrochetCrabStitch {
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
