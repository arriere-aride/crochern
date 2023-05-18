import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { SingleCrochetCrabStitch } from "./SingleCrochetCrabStitch";

const meta: Meta<typeof SingleCrochetCrabStitch> =
  {
    title:
      "Crochet/Atoms/RenderFancies/SingleCrochetCrabStitch",
    component: SingleCrochetCrabStitch,
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
type Story = StoryObj<
  typeof SingleCrochetCrabStitch
>;

export const Default: Story = {
  args: {},
};
