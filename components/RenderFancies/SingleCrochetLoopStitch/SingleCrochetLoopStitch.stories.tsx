import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { SingleCrochetLoopStitch } from "./SingleCrochetLoopStitch";

const meta: Meta<typeof SingleCrochetLoopStitch> =
  {
    title:
      "Crochet/Atoms/RenderFancies/SingleCrochetLoopStitch",
    component: SingleCrochetLoopStitch,
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
  typeof SingleCrochetLoopStitch
>;

export const Default: Story = {};
