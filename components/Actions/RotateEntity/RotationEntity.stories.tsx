import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { SingleCrochet } from "@/components/RenderEntity";
import { RotateEntity } from "@@/components/Actions";

const meta: Meta<typeof RotateEntity> = {
  title: "Crochet/Atoms/Actions/RotateEntity",
  component: RotateEntity,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <svg>
        <Story />
      </svg>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RotateEntity>;

export const Base: Story = {
  args: {
    entity: <SingleCrochet />,
  },
};

export const TwentyFiveDegrees: Story = {
  args: {
    rotation: 25,
    entity: <SingleCrochet />,
  },
};

export const FourtyFiveDegrees: Story = {
  args: {
    rotation: 45,
    entity: <SingleCrochet />,
  },
};
export const OneHundredTwentyDegrees: Story = {
  args: {
    rotation: 120,
    entity: <SingleCrochet />,
  },
};
