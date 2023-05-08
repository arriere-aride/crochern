export interface DoubleTrebleCrochet {
  /**
   * What position it have
   */
  position?: { x: number; y: number };
  /**
   * Line size
   */
  size?: number;
  /**
   * What stroke width to use
   */
  strokeWidth?: number;
  /**
   * What fill color to use
   */
  fillColor?: string;
  /**
   * What angle to set
   */
  rotation?: number;
  /**
   * What padding to set
   */
  padding?: number;
  /**
   * What scale middle bars have,
   * ref to entity box and center
   */
  middlePadding?: number;
  /**
   * How to style on hover?
   */
  hover?: {
    fillColor: string;
  };
}
