export interface RepeatDoubleCrochetOneStitch {
  /**
   * How much repeat
   */
  repeat?: number;
  theme?: {
    /**
     * What strokeWidth to use
     */
    strokeWidth: number;
    /**
     * What fill color to use
     */
    fillColor: string;
  };

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
