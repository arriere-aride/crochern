import type { Meta, StoryObj } from "@storybook/react";

import { RenderShadowBox } from "./RenderShadowBox";
import { SingleCrochet, SlipSnitch, TrebleCrochet } from "../RenderEntity";

const meta: Meta<typeof RenderShadowBox> = {
  title: "Crochet/Atoms/RenderShadowBox",
  component: RenderShadowBox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "512px", height: "512px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RenderShadowBox>;

export const WithSlipSnitch: Story = {
  args: {
    entity: <SlipSnitch />,
  },
};
export const WithTrebleCrochet: Story = {
  args: {
    entity: <TrebleCrochet />,
  },
};

export const WithGrid: Story = {
  args: {
    entity: <SingleCrochet />,
    grid: {
      x: 50,
      y: 50,
      width: 150,
      height: 150,
      top: 10,
      left: 10,
      bottom: 10,
      right: 10,
      toJSON: () => true,
    },
  },
};
