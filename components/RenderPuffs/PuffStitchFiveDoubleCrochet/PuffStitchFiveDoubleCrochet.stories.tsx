import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { PuffStitchFiveDoubleCrochet } from "./PuffStitchFiveDoubleCrochet";

const meta: Meta<
  typeof PuffStitchFiveDoubleCrochet
> = {
  title:
    "Crochet/Atoms/RenderPuffs/PuffStitchFiveDoubleCrochet",
  component: PuffStitchFiveDoubleCrochet,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<
  typeof PuffStitchFiveDoubleCrochet
>;

export const Default: Story = {
  args: {},
};
