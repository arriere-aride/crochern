import { EntityTheme } from "@/stores";

export interface StarStitch {
  /**
   * Which theme to use
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
  /**
   * Which padding to use
   */
  padding?: number;
}
