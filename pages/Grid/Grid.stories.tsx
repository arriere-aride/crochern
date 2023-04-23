import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Crochet/Info/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <svg>
        <Story />
      </svg>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = { args: {} };
export const GridFourRatio: Story = {
  args: {
    grid: {
      strokeWidth: 0.5,
      strokeColor: "gray",
      width: 400,
      height: 400,
    },
    cell: {
      strokeWidth: 0.5,
      strokeColor: "lightblue",
      size: 4,
    },
    separator: {
      strokeWidth: 1,
      strokeColor: "gray",
      size: 40,
    },
  },
};
export const GridFourtyRatio: Story = {
  args: {
    grid: {
      strokeWidth: 0.5,
      strokeColor: "gray",
      width: 400,
      height: 400,
    },
    cell: {
      strokeWidth: 0.5,
      strokeColor: "lightblue",
      size: 40,
    },
    separator: {
      strokeWidth: 1,
      strokeColor: "gray",
      size: 400,
    },
  },
};