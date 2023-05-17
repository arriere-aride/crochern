import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { PuffStitchFourDoubleCrochet } from "./PuffStitchFourDoubleCrochet";

const meta: Meta<
  typeof PuffStitchFourDoubleCrochet
> = {
  title:
    "Crochet/Atoms/RenderPuffs/PuffStitchFourDoubleCrochet",
  component: PuffStitchFourDoubleCrochet,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<
  typeof PuffStitchFourDoubleCrochet
>;

export const Default: Story = {
  args: {},
};
