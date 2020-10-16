import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SelectBox, SelectBoxProps } from '../SelectBox';

export default {
  title: 'Components/SelectBox',
  component: SelectBox,
  decorators: [withKnobs],
} as Meta;

const handleSelectBoxClick = (id: string) => {
  console.log(id);
};

export const Default: Story<SelectBoxProps> = (args) => <SelectBox {...args} />;
Default.args = {
  handleSelectBoxClick,
};

export const WithText: Story<SelectBoxProps> = (args) => <SelectBox {...args} />;
WithText.args = {
  text: 'Pizzas',
  handleSelectBoxClick,
};

export const Selected: Story<SelectBoxProps> = (args) => <SelectBox {...args} />;
Selected.args = {
  text: 'Pizzas',
  selected: true,
  handleSelectBoxClick,
};
