import { InMemoryEntity } from "@/stores/EntityMoveReducer";

export interface RenderShadowBox {
  /**
   * Box size, will also scale entity inside
   */
  size?: number;
  /**
   * Which theme to apply…
   */
  theme?: {
    /**
     * …on the container
     */
    container: any;
    /**
     * …on svg
     */
    svg: any;
    /**
     * …on entity
     */
    entity: any;
  };
  /**
   * What entity to render
   */
  currentEntity: InMemoryEntity;
  /**
   * What are grid props
   */
  grid?: DOMRect;
  /**
   * What to do on document click
   */
  onDocumentClick?: (values: any) => any;
  /**
   * What position to have
   */
  currentPosition: { x: number; y: number };
  /**
   * What padding to have
   */
  padding?: number;
}
