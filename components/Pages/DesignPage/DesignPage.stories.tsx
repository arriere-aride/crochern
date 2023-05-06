import { OnToolBarEntityClick } from "@/components";
import { tools } from "@/data";
import SelectGridEntity from "@/selectors/SelectGridEntity";
import store from "@/stores";
import { ActionTypes } from "@/stores/EntitySelectionReducer";
import type {
  Meta,
  StoryObj,
} from "@storybook/react";
import { Provider } from "react-redux";

import { TargetEntity } from "@/stores/EntityMoveReducer";
import { DesignPage } from "./DesignPage";

const meta: Meta<typeof DesignPage> = {
  title: "Crochet/Pages/DesignPage",
  component: DesignPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};
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

export default meta;
type Story = StoryObj<typeof DesignPage>;

export const Default: Story = {
  args: {
    gridProps: {
      baseScale: 2,
      onTargetEntityClick: OnTargetEntityClick,
    },
    toolBarProps: {
      tools,
      handleClick: OnToolBarEntityClick,
    },
  },
};
