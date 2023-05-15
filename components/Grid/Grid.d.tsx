import {
  GridCell,
  unit,
} from "../GridCell/GridCell";

export interface Grid {
  /**
   *  Which id svg container have
   */
  id?: string;
  /**
   * Cell is the most little atom in grid
   */
  cell?: GridCell;
  /**
   * Separator separates cell
   */
  separator?: GridCell;
  /**
   * Grid container
   */
  grid?: {
    stroke: string;
    strokeWidth: unit;
    width: unit;
    height: unit;
  };
  /**
   * What scale to use
   */
  baseScale?: number;
  /**
   * What scale can it max
   */
  maxScale?: number;
  /**
   * What to do on Grid click
   */
  onGridClick?: (...values: any) => any;
  /**
   * What to do on Entity click
   */
  onTargetEntityClick?: (...values: any) => any;
}
