import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { Chain } from "./Chain";

const meta: Meta<typeof Chain> = {
  title: "Crochet/Atoms/RenderEntity/Chain",
  component: Chain,
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
type Story = StoryObj<typeof Chain>;

export const Default: Story = {
  args: {
    radius: { rx: 16, ry: 8 },
    position: { x: 50, y: 50 },
  },
};
