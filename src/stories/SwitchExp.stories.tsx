import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SwitchExp } from '../SwitchExp';

export default {
  title: 'Components/SwitchExp',
  component: SwitchExp,
  decorators: [withKnobs],
} as Meta;

export const Default = (args) => <SwitchExp {...args} />;
Default.args = {};
