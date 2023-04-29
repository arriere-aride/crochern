import { ResizeEntity } from "@/components/Actions";
import { useScroll } from "@/components/hooks";
import { useState } from "react";

interface OnScrollResize {
  /**
   * What entity to resize
   */
  entity: JSX.Element | React.ReactNode;
  /**
   * What scale to use
   */
  baseScale?: number;
  /**
   * What scale can it max
   */
  maxScale?: number;
}

export const OnScrollResize = ({
  entity,
  baseScale = 1,
  maxScale = 12,
}: OnScrollResize) => {
  const [scale, setScale] = useState<number>(baseScale);

  useScroll((event: any) => {
    setScale((previousScale) => {
      previousScale += event.deltaY * -0.01;
      return Math.min(Math.max(1, previousScale), maxScale);
    });
  });

  return (
    <svg data-testid="on-scroll-resize">
      <ResizeEntity scale={scale} entity={entity} />
    </svg>
  );
};
