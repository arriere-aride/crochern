export interface TrebleCrochet {
  /**
   * What stroke width to set
   */
  strokeWidth?: number;
  /**
   * What position it have
   */
  position?: { x: number; y: number };
  /**
   * Line size
   */
  size?: number;
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
   * What scale middle bars have, ref to entity size
   */
  middlePadding?: number;
}
