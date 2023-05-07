import { SelectGridEntity } from "@/selectors";
import store from "@/stores";
import { TargetEntity } from "@/stores/EntityMoveReducer";
import { ActionTypes } from "@/stores/EntitySelectionReducer";

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
    type: ActionTypes.SELECT,
    entity,
  });
};
export { OnTargetEntityClick };
