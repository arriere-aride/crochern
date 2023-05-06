import { Store } from "@/stores";
import { useSelector } from "react-redux";

export default function SelectGridSelectionEntity() {
  return useSelector(
    (state: Store) => state.selection.selection
  );
}
