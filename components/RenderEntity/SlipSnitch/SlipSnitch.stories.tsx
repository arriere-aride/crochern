import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { SlipSnitch } from "./SlipSnitch";

const meta: Meta<typeof SlipSnitch> = {
  title: "Crochet/Atoms/RenderEntity/SlipSnitch",
  component: SlipSnitch,
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
type Story = StoryObj<typeof SlipSnitch>;

export const Default: Story = {
  args: {
    fillColor: "#1a1a1a",
    radius: 8,
    position: { cx: 50, cy: 50 },
  },
};
