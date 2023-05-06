import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { seedMemoryEntity } from "@/seeds/EntityMove.seed";
import { RenderShadowBox } from "./RenderShadowBox";

const meta: Meta<typeof RenderShadowBox> = {
  title: "Crochet/Atoms/RenderShadowBox",
  component: RenderShadowBox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "512px",
          height: "512px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RenderShadowBox>;

export const WithSlipSnitch: Story = {
  args: {
    currentEntity: seedMemoryEntity()[0],
  },
};
export const WithTrebleCrochet: Story = {
  args: {
    currentEntity: seedMemoryEntity()[0],
  },
};

export const WithGrid: Story = {
  args: {
    currentEntity: seedMemoryEntity()[0],
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
