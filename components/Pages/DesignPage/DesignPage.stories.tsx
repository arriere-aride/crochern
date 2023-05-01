import type { Meta, StoryObj } from "@storybook/react";

import { DesignPage } from "./DesignPage";
import {
  SlipSnitch,
  SingleCrochet,
  Chain,
  HalfDoubleCrochet,
  DoubleCrochet,
  TrebleCrochet,
  DoubleTrebleCrochet,
} from "@/components/RenderEntity";

const meta: Meta<typeof DesignPage> = {
  title: "Crochet/Pages/DesignPage",
  component: DesignPage,
  tags: ["autodocs"],
  // decorators: [Story => <div style={{width: "512px"}}><Story/></div>]
};

export default meta;
type Story = StoryObj<typeof DesignPage>;

export const Default: Story = {
  args: {
    toolBarProps: {
      tools: [
        { label: "Slip Snitch", entity: <SlipSnitch /> },
        { label: "Single Crochet", entity: <SingleCrochet /> },
        { label: "Chain", entity: <Chain /> },
        { label: "Half Double Crochet", entity: <HalfDoubleCrochet /> },
        { label: "Double Crochet", entity: <DoubleCrochet /> },
        { label: "Treble Crochet", entity: <TrebleCrochet /> },
        { label: "Double Treble Crochet", entity: <DoubleTrebleCrochet /> },
      ],
    },
  },
};
