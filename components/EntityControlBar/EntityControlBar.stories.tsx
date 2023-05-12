import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { seedTargetEntity } from "@/seeds/EntityMove.seed";
import store, {
  SelectionActionTypes,
} from "@/stores";
import { faker } from "@faker-js/faker";
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

const colors: string[] = Array(5)
  .fill("")
  .map(() =>
    faker.color.rgb({
      format: "hex",
      casing: "lower",
    })
  );

export const Default: Story = {
  args: {},
};
export const WithSelectedEntity: Story = {
  render: (args) => {
    store.dispatch({
      type: SelectionActionTypes.SELECT,
      entity: seedTargetEntity()[0],
    });
    return (
      <EntityControlBar
        {...args}
        colors={colors}
      />
    );
  },
};
