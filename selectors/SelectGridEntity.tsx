import { TargetEntity } from "@/stores/EntityMoveReducer";

interface SelectGridEntity {
  id: string;
  list: TargetEntity[];
}
export default function SelectGridEntity({
  id,
  list,
}: SelectGridEntity): TargetEntity | undefined {
  return list.find(
    ({ _id }: { _id: string }) => _id === id
  );
}
