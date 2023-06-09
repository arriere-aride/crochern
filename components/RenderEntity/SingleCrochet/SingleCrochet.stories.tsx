import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { SingleCrochet } from "./SingleCrochet";

const meta: Meta<typeof SingleCrochet> = {
  title:
    "Crochet/Atoms/RenderEntity/SingleCrochet",
  component: SingleCrochet,
  tags: ["autodocs"],
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
    theme: { color: "#1a1a1a" },
    size: 8,
    position: { x: 50, y: 50 },
  },
};
export const Variant2: Story = {
  args: {
    rotation: 45,
  },
};
