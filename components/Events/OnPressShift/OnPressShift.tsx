import { Store } from "@/stores";
import { useSelector } from "react-redux";
import {
  useMousePosition,
  useShiftKey,
  useToggle,
} from "../../hooks";

export const OnPressShift = (): JSX.Element => {
  const position = useMousePosition();
  const [shiftPressed, toggleShift] =
    useToggle(false);
  const selection = useSelector(
    (state: Store) => state.selection.selection[0]
  );

  function onKeyPress(_: any, keyLock: boolean) {
    // toggle();
    console.log("keyLock", keyLock);
    if (keyLock === false) {
      console.log({ start: position });
      toggleShift(true);
    }
    if (keyLock === true) {
      console.log({ end: position });
      toggleShift(false);
    }
  }
  if (shiftPressed === true) {
    console.log({
      during: JSON.stringify(position),
    });
  }
  useShiftKey(onKeyPress);
  return <></>;
};
