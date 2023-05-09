import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { useToggle } from "./useToggle";

export const useShiftKey = (
  callback: any,
  node = null
) => {
  const [keyLock, toggleKeyLock] =
    useToggle(false);
  // implement the callback ref pattern
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  const handleKeyDown = useCallback(
    (event: any) => {
      event.preventDefault();
      if (event.shiftKey && keyLock === false) {
        toggleKeyLock(true);
        callbackRef.current(event, keyLock);
      }
    },
    [keyLock, toggleKeyLock]
  );
  const handleKeyUp = useCallback(
    (event: any) => {
      event.preventDefault();
      if (keyLock === true) {
        toggleKeyLock(false);
        callbackRef.current(event, keyLock);
      }
    },
    [keyLock, toggleKeyLock]
  );

  useEffect(() => {
    // target is either the provided node or the document
    const targetNode = node ?? document;
    // attach the event listener
    targetNode &&
      targetNode.addEventListener(
        "keydown",
        handleKeyDown
      );
    targetNode &&
      targetNode.addEventListener(
        "keyup",
        handleKeyUp
      );

    // remove the event listener
    return () => {
      if (targetNode) {
        targetNode.removeEventListener(
          "keydown",
          handleKeyDown
        );
        targetNode.removeEventListener(
          "keyup",
          handleKeyUp
        );
      }
    };
  }, [handleKeyDown, handleKeyUp, node]);
};
