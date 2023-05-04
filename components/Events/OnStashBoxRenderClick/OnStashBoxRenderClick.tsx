import { ActionTypes } from "@/stores/EntityMoveReducer";
import store from "@/stores/EntityMoveStore";

interface OnStashBoxRenderClick {
  e: any;
}

export const OnStashBoxRenderClick = ({ e }: OnStashBoxRenderClick) => {
  const [x, y] = [e.clientX, e.clientY];
  console.log({ x, y });
  store.dispatch({ type: ActionTypes.UNSTASH });
};
