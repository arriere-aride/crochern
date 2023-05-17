import { EntityTheme } from "@/stores";

export interface RepeatDoubleCrochetTogether {
  /**
   * How much repeat
   */
  repeat?: number;
  /**
   * Which theme to use
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
   * Which padding to set
   */
  padding?: number;
}
