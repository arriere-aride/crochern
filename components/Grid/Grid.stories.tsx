import {
  OnGridClick,
  OnTargetEntityClick,
} from "@/components";
import store from "@/stores";
import type {
  Meta,
  StoryObj,
} from "@storybook/react";
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

export const WithClickEvent: Story = {
  args: {
    onGridClick: OnGridClick,
    onTargetEntityClick: OnTargetEntityClick,
  },
};
