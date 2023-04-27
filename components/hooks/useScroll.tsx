import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

export const useScroll = (callback: any, node = null) => {
  // implement the callback ref pattern
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  // handle what happens on scroll
  const handleScroll = useCallback((event: any) => {
    event.preventDefault();

    callbackRef.current(event);
  }, []);

  useEffect(() => {
    // target is either the provided node or the document
    const targetNode = node ?? document;
    // attach the event listener
    targetNode && targetNode.addEventListener("wheel", handleScroll);
  }, [handleScroll, node]);
};
