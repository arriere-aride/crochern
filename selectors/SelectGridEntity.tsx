import { State, TargetEntity } from "@/stores/EntityMoveReducer";
import { useSelector } from "react-redux";

interface SelectGridEntity {
  id: string;
  list: TargetEntity[];
}
export default function SelectGridEntity({
  id,
  list,
}: SelectGridEntity): TargetEntity | undefined {
  return list.find(({ _id }: { _id: string }) => _id === id);
}
