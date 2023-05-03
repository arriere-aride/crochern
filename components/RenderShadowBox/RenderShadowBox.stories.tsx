import type { Meta, StoryObj } from "@storybook/react";

import { RenderShadowBox } from "./RenderShadowBox";
import { SlipSnitch, TrebleCrochet } from "../RenderEntity";

const meta: Meta<typeof RenderShadowBox> = {
  title: "Crochet/Atoms/RenderShadowBox",
  component: RenderShadowBox,
  tags: ["autodocs"],
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
