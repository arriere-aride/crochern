import type { Meta, StoryObj } from "@storybook/react";

import { OnScrollResize } from "./OnScrollResize";
import { DoubleCrochet } from "@/components/RenderEntity";
import { within } from "@storybook/testing-library";

const meta: Meta<typeof OnScrollResize> = {
  title: "Crochet/Atoms/Events/OnScrollResize",
  component: OnScrollResize,
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
type Story = StoryObj<typeof OnScrollResize>;

export const Base: Story = {
  args: {
    entity: <DoubleCrochet />,
  },
};
