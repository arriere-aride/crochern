import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { PopcornStitchFourDoubleCrochet } from "./PopcornStitchFourDoubleCrochet";

const meta: Meta<
  typeof PopcornStitchFourDoubleCrochet
> = {
  title:
    "Crochet/Atoms/RenderPuffs/PopcornStitchFourDoubleCrochet",
  component: PopcornStitchFourDoubleCrochet,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<
  typeof PopcornStitchFourDoubleCrochet
>;

export const Default: Story = {
  args: {},
};
