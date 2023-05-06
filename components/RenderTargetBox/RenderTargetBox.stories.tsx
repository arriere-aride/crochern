import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { seedTargetEntity } from "@/seeds/EntityMove.seed";
import store from "@/stores";
import { Provider } from "react-redux";
import { RenderTargetBox } from "./RenderTargetBox";

const meta: Meta<typeof RenderTargetBox> = {
  title: "Crochet/Atoms/RenderTargetBox",
  component: RenderTargetBox,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Provider store={store}>
        <svg>
          <Story />
        </svg>
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RenderTargetBox>;

export const Default: Story = {
  args: { targets: seedTargetEntity() },
};
