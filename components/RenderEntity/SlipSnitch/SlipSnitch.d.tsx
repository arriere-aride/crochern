import { EntityTheme } from "@/stores";

export interface SlipSnitch {
  /**
   * What theme to use?
   */
  theme?: EntityTheme;
  /**
   * What background color to use
   */
  backgroundColor?: string;

  /**
   * What padding to set
   */
  padding?: number;
  /**
   * Box size
   */
  size?: number;
  /**
   * What radius to use
   */
  radius?: number;
  /**
   * Where to position
   */
  position?: {
    x: number;
    y: number;
  };
}
