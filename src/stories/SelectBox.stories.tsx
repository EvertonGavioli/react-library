import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SelectBox, SelectBoxProps } from '../SelectBox';

import IconPizzaria from '../Icons/IconPizzaria';

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

export const WithIcon: Story<SelectBoxProps> = (args) => (
  <SelectBox {...args}>
    <IconPizzaria style={{ fontSize: 72 }} />
    {/* <img src={'/Pizzaria.svg'} width="50px" height="50px" /> */}
  </SelectBox>
);
WithIcon.args = {
  text: 'Pizzas',
  selected: true,
  handleSelectBoxClick,
};
