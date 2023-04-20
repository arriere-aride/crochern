import type { Meta, StoryObj } from '@storybook/react';

import { CommandInput } from './CommandInput';
import { ShortcutKey } from '../ShortcutKey/ShortcutKey';

const meta: Meta<typeof CommandInput> = {
  title: 'Crochet/Input/CommandInput',
  component: CommandInput,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CommandInput>;

export const Medium: Story = {};
export const WithShortKey: Story = {
  args: {
    shortcutKey: <><ShortcutKey label="R" size="extra-small" /></>
  }
  
};

