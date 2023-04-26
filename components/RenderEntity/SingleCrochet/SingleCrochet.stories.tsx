import type { Meta, StoryObj } from "@storybook/react";

import { SingleCrochet } from "./SingleCrochet";

const meta: Meta<typeof SingleCrochet> = {
  title: "Crochet/RenderEntity/SingleCrochet",
  component: SingleCrochet,
  tags: ["autodocs"],
  argTypes: {
    fillColor: {
      control: "color",
    },
  },
  decorators: [
    (Story) => (
      <svg>
        <Story />
      </svg>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SingleCrochet>;

export const Default: Story = {
  args: {
    fillColor: "#1a1a1a",
    size: 8,
    position: { x: 50, y: 50 },
  },
};
export const Variant2: Story = {
  args: {
    rotation: 45,
  },
};
