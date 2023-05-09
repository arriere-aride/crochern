import { SelectGridEntity } from "@/selectors";
import store, {
  SelectionActionTypes,
  TargetEntity,
} from "@/stores";

const OnTargetEntityClick = ({
  id,
  targets,
}: {
  id: string;
  targets: TargetEntity[];
}) => {
  const entity = SelectGridEntity({
    id,
    list: targets,
  });
  store.dispatch({
    type: SelectionActionTypes.SELECT,
    entity,
  });
};
export { OnTargetEntityClick };
