import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from "./Grid";
import store from "@/stores/EntityMoveStore";
import { Provider } from "react-redux";

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
export const GridFourtyRatio: Story = {
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
      size: 40,
    },
    separator: {
      strokeWidth: 1,
      stroke: "gray",
      size: 400,
    },
  },
};
const getCursorPosition = (event: any) => {
  event.preventDefault();
  const [x, y] = [event.clientX, event.clientY];
};
export const WithClickEvent: Story = {
  args: {
    onGridClick: getCursorPosition,
  },
};
