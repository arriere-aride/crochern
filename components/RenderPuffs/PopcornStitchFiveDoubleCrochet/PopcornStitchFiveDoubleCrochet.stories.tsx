import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { PopcornStitchFiveDoubleCrochet } from "./PopcornStitchFiveDoubleCrochet";

const meta: Meta<
  typeof PopcornStitchFiveDoubleCrochet
> = {
  title:
    "Crochet/Atoms/RenderPuffs/PopcornStitchFiveDoubleCrochet",
  component: PopcornStitchFiveDoubleCrochet,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<
  typeof PopcornStitchFiveDoubleCrochet
>;

export const Default: Story = {
  args: {},
};
