import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components/Icons',
  decorators: [withKnobs],
};

import { AddIcon, SearchIcon, VisibilityOutlinedIcon } from '../Icons';

export const AllIcons = (args) => (
  <div {...args}>
    <AddIcon />
    <SearchIcon />
    <VisibilityOutlinedIcon />
  </div>
);
