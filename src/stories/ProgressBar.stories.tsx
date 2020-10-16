import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ProgressBar, ProgressBarProps } from '../ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;
Default.args = {};
