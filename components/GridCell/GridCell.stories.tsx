import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { GridCell } from "./GridCell";

const meta: Meta<typeof GridCell> = {
  title: "Crochet/Atoms/GridCell",
  component: GridCell,
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
type Story = StoryObj<typeof GridCell>;

export const Default: Story = {};
