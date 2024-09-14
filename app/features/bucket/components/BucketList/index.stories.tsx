import type { StoryObj } from '@storybook/react';
import { BucketList } from './Index';

export default {
  title: 'Features/Bucket/Components/BucketList',
  component: BucketList,
};

type Story = StoryObj<typeof BucketList>;

export const Default: Story = {
  args: {
    ages: [
      {
        start: 10,
        end: 20,
      },
      {
        start: 11,
        end: 20,
      },
      {
        start: 21,
        end: 30,
      },
      {
        start: 31,
        end: 40,
      },
      {
        start: 41,
        end: 50,
      },
      {
        start: 51,
        end: 60,
      },
    ],
  }
}
