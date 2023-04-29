/* eslint-disable react/jsx-key */
import type { Meta, StoryObj } from "@storybook/react";

import { ToolBar } from "./ToolBar";
import {
  Chain,
  SingleCrochet,
  HalfDoubleCrochet,
  DoubleCrochet,
  TrebleCrochet,
  DoubleTrebleCrochet,
} from "../RenderEntity";

const meta: Meta<typeof ToolBar> = {
  title: "Crochet/Bar/ToolBar",
  component: ToolBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "28px",
          height: "100%",
          backgroundColor: "#484848",
          position: "relative",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ToolBar>;

export const Default: Story = {
  args: {
    tools: [
      { label: "Single Crochet", entity: <SingleCrochet /> },
      { label: "Chain", entity: <Chain /> },
      { label: "Half Double Crochet", entity: <HalfDoubleCrochet /> },
      { label: "Double Crochet", entity: <DoubleCrochet /> },
      { label: "Treble Crochet", entity: <TrebleCrochet /> },
      { label: "Double Treble Crochet", entity: <DoubleTrebleCrochet /> },
    ],
  },
};
