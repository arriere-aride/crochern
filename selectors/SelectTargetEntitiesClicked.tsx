import store from "@/stores";
import { AABB } from "@/validators";

export default function SelectTargetEntitiesClicked({
  x,
  y,
}: {
  x: number;
  y: number;
}) {
  return store
    .getState()
    .moves.target.map(
      ({
        position,
      }: {
        position: { x: number; y: number };
      }) => {
        const box = {
          x: position.x,
          y: position.y,
          width: 16,
          height: 16,
        };
        return AABB({ x, y }, box);
      }
    );
}
