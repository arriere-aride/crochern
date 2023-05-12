import type {
  Meta,
  StoryObj,
} from "@storybook/react";

import { faker } from "@faker-js/faker";
import { EntityControlColorSelector } from "./EntityControlColorSelector";

const meta: Meta<
  typeof EntityControlColorSelector
> = {
  title:
    "Crochet/Atoms/EntityControlColorSelector",
  component: EntityControlColorSelector,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<
  typeof EntityControlColorSelector
>;

export const Default: Story = {};
export const WithColor: Story = {
  args: {
    colors: [
      faker.color.rgb({
        format: "hex",
        casing: "lower",
      }),
    ],
  },
};
export const WithColors: Story = {
  args: {
    colors: Array(5)
      .fill("")
      .map(() =>
        faker.color.rgb({
          format: "hex",
          casing: "lower",
        })
      ),
  },
};
