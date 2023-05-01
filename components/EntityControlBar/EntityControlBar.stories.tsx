import type { Meta, StoryObj } from "@storybook/react";

import { EntityControlBar } from "./EntityControlBar";

const meta: Meta<typeof EntityControlBar> = {
  title: "Crochet/Components/Bar/EntityControlBar",
  component: EntityControlBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "512px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EntityControlBar>;

export const Default: Story = {
  args: {},
};
