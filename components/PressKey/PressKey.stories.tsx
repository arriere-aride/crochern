import type { Meta, StoryObj } from "@storybook/react";

import { PressKey } from "./PressKey";

const meta: Meta<typeof PressKey> = {
  title: "Crochet/Info/PressKey",
  component: PressKey,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div>
        Press key
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PressKey>;

export const Medium: Story = {
  args: {
    keyName: "r",
  },
};
