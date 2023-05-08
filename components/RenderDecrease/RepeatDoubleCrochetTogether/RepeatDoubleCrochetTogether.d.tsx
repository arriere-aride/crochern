export interface RepeatDoubleCrochetTogether {
  /**
   * How much repeat
   */
  repeat?: number;
  theme?: {
    /**
     * What fill color to use
     */
    fillColor: string;
    /**
     * What stroke width to use
     */
    strokeWidth: number;
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
   * Which padding to set
   */
  padding?: number;
}
