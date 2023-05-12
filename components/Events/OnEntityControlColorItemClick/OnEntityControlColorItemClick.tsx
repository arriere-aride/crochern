import store, {
  SelectionActionTypes,
} from "@/stores";

export const OnEntityControlColorItemClick = ({
  color,
}: {
  color: string;
}) => {
  store.dispatch({
    type: SelectionActionTypes.UPDATE_SELECTED,
    updated: {
      path: ["theme", "color"],
      value: color,
    },
  });
};
