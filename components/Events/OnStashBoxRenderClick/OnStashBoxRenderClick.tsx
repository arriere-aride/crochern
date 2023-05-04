import { ActionTypes } from "@/stores/EntityMoveReducer";
import store from "@/stores/EntityMoveStore";

interface OnStashBoxRenderClick {
  e: any;
  position: { x: number; y: number };
}

export const OnStashBoxRenderClick = ({
  e,
  position,
}: OnStashBoxRenderClick) => {
  const [x, y] = [e.clientX, e.clientY];
  store.dispatch({ type: ActionTypes.PUSH, position });
  store.dispatch({ type: ActionTypes.UNSTASH });
};
