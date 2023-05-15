import React from "react";

export const useBoundingGrid = ({
  id,
}: {
  id: string;
}) => {
  const [currentGridProps, setCurrentGridProps] =
    React.useState<DOMRect | null>(null);

  React.useEffect(() => {
    const element = document.querySelector(
      `#${id}`
    );
    if (element != null) {
      setCurrentGridProps(
        element.getBoundingClientRect()
      );
    }
  }, [id]);

  return [currentGridProps, setCurrentGridProps];
};
