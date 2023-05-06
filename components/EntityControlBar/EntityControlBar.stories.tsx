import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import store from "@/stores";
import { Provider } from "react-redux";
import { EntityControlBar } from "./EntityControlBar";

const meta: Meta<typeof EntityControlBar> = {
  title:
    "Crochet/Components/Bar/EntityControlBar",
  component: EntityControlBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ width: "512px" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EntityControlBar>;

export const Default: Story = {
  args: {},
};
