import type { Meta, StoryObj } from "@storybook/react";

import { RenderBox } from "./RenderBox";
import {
  DoubleCrochet,
  SingleCrochet,
  SlipSnitch,
  Chain,
  HalfDoubleCrochet,
  TrebleCrochet,
  DoubleTrebleCrochet,
} from "../RenderEntity";

import {
  BackLoopOnly,
  BackPost,
  FrontLoopOnly,
  FrontPost,
} from "../RenderVariation";
import { TwoSingleCrochetOneStitch } from "../RenderIncrease";

const meta: Meta<typeof RenderBox> = {
  title: "Crochet/RenderBox",
  component: RenderBox,
  tags: ["autodocs"],
  argTypes: {
    fillColor: {
      control: "color",
    },
  },
  decorators: [
    (Story) => (
      <svg width="128" height="128">
        <Story />
      </svg>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RenderBox>;

export const WithSlipSnitch: Story = {
  args: {
    entity: <SlipSnitch />,
  },
};

export const WithChain: Story = {
  args: {
    entity: <Chain />,
  },
};

export const WithSingleCrochet: Story = {
  args: {
    entity: <SingleCrochet />,
  },
};
export const WithHalfDoubleCrochet: Story = {
  args: {
    entity: <HalfDoubleCrochet />,
  },
};

export const WithDoubleCrochet: Story = {
  args: {
    entity: <DoubleCrochet />,
  },
};

export const WithTrebleCrochet: Story = {
  args: {
    entity: <TrebleCrochet />,
  },
};

export const WithDoubleTrebleCrochet: Story = {
  args: {
    entity: <DoubleTrebleCrochet />,
  },
};

export const WithFrontLoopOnly: Story = {
  args: {
    entity: <FrontLoopOnly />,
  },
};

export const WithBackLoopOnly: Story = {
  args: {
    entity: <BackLoopOnly />,
  },
};

export const WithFrontPost: Story = {
  args: {
    entity: <FrontPost />,
  },
};

export const WithBackPost: Story = {
  args: {
    entity: <BackPost />,
  },
};

export const WithTwoSingleCrochetOneStitch: Story = {
  args: {
    entity: <TwoSingleCrochetOneStitch />,
  },
};
