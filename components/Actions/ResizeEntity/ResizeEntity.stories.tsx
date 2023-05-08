import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { SingleCrochet } from "@/components/RenderEntity";
import { ResizeEntity } from "@@/components/Actions";

const meta: Meta<typeof ResizeEntity> = {
  title: "Crochet/Atoms/Actions/ResizeEntity",
  component: ResizeEntity,
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
type Story = StoryObj<typeof ResizeEntity>;

export const Base: Story = {
  args: {
    entity: <SingleCrochet />,
  },
};

export const Twice: Story = {
  args: {
    scale: 2,
    entity: <SingleCrochet />,
  },
};

export const ThreeTimes: Story = {
  args: {
    scale: 3,
    entity: <SingleCrochet />,
  },
};
export const NineTimes: Story = {
  args: {
    scale: 9,
    entity: <SingleCrochet />,
  },
};
