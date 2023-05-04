import type { Meta, StoryObj } from "@storybook/react";

import { OnScrollResize } from "./OnScrollResize";
import { DoubleCrochet } from "@/components/RenderEntity";

const meta: Meta<typeof OnScrollResize> = {
  title: "Crochet/Atoms/Events/OnScrollResize",
  component: OnScrollResize,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof OnScrollResize>;

export const Base: Story = {
  args: {
    entity: <DoubleCrochet />,
  },
};
