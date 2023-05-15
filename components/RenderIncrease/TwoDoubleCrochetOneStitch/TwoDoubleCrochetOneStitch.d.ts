import { EntityTheme } from "@/stores";

export interface TwoDoubleCrochetOneStitch {
  theme: EntityTheme;
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
   * What padding to use
   */
  padding?: number;
}
