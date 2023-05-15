import { EntityTheme } from "@/stores";

export interface RepeatDoubleCrochetOneStitch {
  /**
   * How much repeat
   */
  repeat?: number;

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
   * Which padding to use
   */
  padding?: number;
}
