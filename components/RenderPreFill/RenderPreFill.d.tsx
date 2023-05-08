export interface RenderPreFill {
  /**
   * Which grid to use
   */
  grid?: DOMRect | null;
  /**
   * What to do on click?
   * @param values any
   * @returns any
   */
  OnStashBoxRenderClick?: (values: any) => any;
  /**
   * Which cell size surround entity?
   */
  cellSize?: number;
}
