import type { Meta, StoryObj } from '@storybook/react';

import { ShortcutKey } from './ShortcutKey';

const meta: Meta<typeof ShortcutKey> = {
  title: 'Crochet/Info/ShortcutKey',
  component: ShortcutKey,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    borderBottomColor: {
      control: "color",
    },
    labelColor: {
      control: "color"
    }
  },
};

export default meta;
type Story = StoryObj<typeof ShortcutKey>;

export const Medium: Story = {
  args: {
    label: 'F1',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'F1',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'F1',
  },
};
