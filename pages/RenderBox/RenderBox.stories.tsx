import type { Meta, StoryObj } from "@storybook/react";

import { RenderBox } from "./RenderBox";
import {
  DoubleCrochet,
  SingleCrochet,
  SlipSnitch,
  Chain,
} from "../RenderEntity";

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

export const WithDoubleCrochet: Story = {
  args: {
    entity: <DoubleCrochet />,
  },
};
