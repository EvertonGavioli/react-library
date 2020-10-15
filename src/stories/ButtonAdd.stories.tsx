import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonAdd, ButtonAddProps } from '../ButtonAdd';

export default {
  title: 'Components/ButtonAdd',
  component: ButtonAdd,
  decorators: [withKnobs],
  argTypes: {
    bgColor: { control: 'color' },
  },
} as Meta;

export const Basic: Story<ButtonAddProps> = (args: ButtonAddProps) => (
  <ButtonAdd {...args}>Adicionar</ButtonAdd>
);
Basic.args = {};
