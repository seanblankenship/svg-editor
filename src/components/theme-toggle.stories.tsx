import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './theme-toggle';
import { ThemeProvider } from './theme-provider';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider attribute="class">
        <div className="p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};
