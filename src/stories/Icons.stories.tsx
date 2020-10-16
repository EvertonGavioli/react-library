import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components/Icons',
  decorators: [withKnobs],
};

import {
  AddIcon,
  SearchIcon,
  VisibilityOutlinedIcon,
  IconPizzaria,
  IconLanchonete,
} from '../Icons';

export const AllIcons = (args) => (
  <>
    <div {...args}>
      <AddIcon />
      <SearchIcon />
      <VisibilityOutlinedIcon />
    </div>

    <div>
      <IconPizzaria style={{ fontSize: 72 }} />
      <IconLanchonete style={{ fontSize: 72 }} />
    </div>
  </>
);
