import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { PuffStitchThreeDoubleCrochet } from "./PuffStitchThreeDoubleCrochet";

const meta: Meta<
  typeof PuffStitchThreeDoubleCrochet
> = {
  title:
    "Crochet/Atoms/RenderPuffs/PuffStitchThreeDoubleCrochet",
  component: PuffStitchThreeDoubleCrochet,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<
  typeof PuffStitchThreeDoubleCrochet
>;

export const Default: Story = {
  args: {},
};
