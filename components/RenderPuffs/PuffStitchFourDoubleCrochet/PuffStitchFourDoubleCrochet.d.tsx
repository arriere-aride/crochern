import { EntityTheme } from "@/stores";

export interface PuffStitchFourDoubleCrochet {
  theme?: EntityTheme;
  /**
   * What position it should have, centered point
   */
  position?: { x: number; y: number };
  /**
   * Line size
   */
  size?: number;
  /**
   * What padding to set
   */
  padding?: number;
}
