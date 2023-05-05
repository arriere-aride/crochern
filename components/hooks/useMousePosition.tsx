import React from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] =
    React.useState({
      x: 0,
      y: 0,
    });
  React.useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({
        x: ev.clientX - 8,
        y: ev.clientY - 8,
      });
    };
    window.addEventListener(
      "mousemove",
      updateMousePosition
    );
    return () => {
      window.removeEventListener(
        "mousemove",
        updateMousePosition
      );
    };
  }, []);
  return mousePosition;
};
