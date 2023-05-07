import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { SelectTargetEntity } from "@/selectors";
import SelectGridEntity from "@/selectors/SelectGridEntity";
import store from "@/stores";
import { ActionTypes } from "@/stores/EntitySelectionReducer";
import { Provider } from "react-redux";
import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Crochet/Atoms/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {};
export const GridFourRatio: Story = {
  args: {
    grid: {
      strokeWidth: 0.5,
      stroke: "gray",
      width: 400,
      height: 400,
    },
    cell: {
      strokeWidth: 0.5,
      stroke: "lightblue",
      size: 4,
    },
    separator: {
      strokeWidth: 1,
      stroke: "gray",
      size: 40,
    },
  },
};
const getCursorPosition = (event: any) => {
  const [x, y] = [event.clientX, event.clientY];
};
const OnTargetEntityClick = (id: string) => {
  const targets = SelectTargetEntity();
  const entity = SelectGridEntity({
    id,
    list: targets,
  });
  store.dispatch({
    type: ActionTypes.SELECT,
    entity,
  });
};
export const WithClickEvent: Story = {
  args: {
    onGridClick: getCursorPosition,
    onTargetEntityClick: OnTargetEntityClick,
  },
};
