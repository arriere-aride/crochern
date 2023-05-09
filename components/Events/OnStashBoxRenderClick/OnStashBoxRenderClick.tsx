import store, { MoveActionTypes } from "@/stores";

interface OnStashBoxRenderClick {
  e: any;
  position: { x: number; y: number };
}

export const OnStashBoxRenderClick = ({
  e,
  position,
}: OnStashBoxRenderClick) => {
  store.dispatch({
    type: MoveActionTypes.PUSH,
    position,
  });
  store.dispatch({
    type: MoveActionTypes.UNSTASH,
  });
};
