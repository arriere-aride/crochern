import { EntityTheme } from "@/stores";

export interface TwoDoubleCrochetTogether {
  /**
   * What theme to apply
   */
  theme?: EntityTheme;

  /**
   * Where to position both dc
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
   * Which padding to have
   */
  padding?: number;
}
