import { Store } from "@/stores";
import { useSelector } from "react-redux";

export default function SelectTargetEntity() {
  return useSelector(
    (state: Store) => state.moves.memory
  );
}
