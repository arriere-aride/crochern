import { EntityTheme } from "@/stores";

export interface Chain {
  /**
   * What theme to use?
   */
  theme?: EntityTheme;
  /**
   * What padding to set
   */
  padding?: number;
  /**
   * What radius to use
   */
  radius?: {
    rx: number;
    ry: number;
  };
  /**
   * Box size
   */
  size?: number;
  /**
   * Where to position
   */
  position?: {
    x: number;
    y: number;
  };
}
