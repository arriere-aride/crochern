import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { DoubleCrochet } from "@/components/RenderEntity";
import { OnScrollResize } from "./OnScrollResize";

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
