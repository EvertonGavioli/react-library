import React, { ReactFragment } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';

import { theme } from '../Styles/DefaultTheme';

import { Button, ButtonProps } from '../Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withKnobs],
  argTypes: {
    bgcolor: { control: 'color' },
  },
} as Meta;

export const Basic: Story<ButtonProps> = (args: ButtonProps) => <Button {...args}>Default</Button>;
Basic.args = {};

export const All = (): ReactFragment => (
  <>
    <Button bgcolor={theme.palette.primary.main}>Texto</Button>

    <Button disabled>Texto</Button>

    <Button isSecondary bgcolor={theme.palette.primary.main}>
      Texto
    </Button>

    <Button isSecondary disabled>
      Texto
    </Button>
  </>
);

export const Primary = (): ReactFragment => (
  <>
    <Button bgcolor={theme.palette.primary.main}>Texto</Button>
    <Button disabled>Texto</Button>
  </>
);

export const Secondary = (): ReactFragment => (
  <>
    <Button isSecondary bgcolor={theme.palette.primary.main}>
      Texto
    </Button>

    <Button isSecondary disabled>
      Texto
    </Button>
  </>
);
