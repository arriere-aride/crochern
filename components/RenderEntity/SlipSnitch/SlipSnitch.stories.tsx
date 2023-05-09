import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { SlipSnitch } from "./SlipSnitch";

const meta: Meta<typeof SlipSnitch> = {
  title: "Crochet/Atoms/RenderEntity/SlipSnitch",
  component: SlipSnitch,
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
type Story = StoryObj<typeof SlipSnitch>;

export const Default: Story = {};
