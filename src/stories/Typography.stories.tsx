import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Typography, TypographyProps } from "../Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<TypographyProps> = (args: TypographyProps) => (
  <Typography {...args}>Montserrat</Typography>
);
Default.args = {
  variant: "h4",
};

export const Weight = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Typography variant="h5" weight="ultra-light">
      Ultra Light
    </Typography>
    <Typography variant="h5" weight="light">
      Light
    </Typography>
    <Typography variant="h5" weight="medium">
      Medium
    </Typography>
    <Typography variant="h5" weight="regular">
      Regular
    </Typography>
    <Typography variant="h5" weight="semi-bold">
      Semi Bold
    </Typography>
    <Typography variant="h5" weight="bold">
      Bold
    </Typography>
    <Typography variant="h5" weight="extra-bold">
      Extra Bold
    </Typography>
    <Typography variant="h5" weight="black">
      Black
    </Typography>
  </div>
);

export const Variant = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Typography variant="h4">
      h4 - Font size: 40px / Line heigh: 54px
    </Typography>
    <br />
    <Typography variant="h5">
      h5 - Font size: 32px / Line heigh: 44px
    </Typography>
    <br />
    <Typography variant="h6">
      h6 - Font size: 26px / Line heigh: 36px
    </Typography>
    <br />
    <Typography variant="subtitle1">
      subtitle1 - Font size: 20px / Line heigh: 30px
    </Typography>
    <br />
    <Typography variant="body1">
      body1 - Font size: 16px / Line heigh: 26px
    </Typography>
    <br />
    <Typography variant="body2">
      body2 - Font size: 12px / Line heigh: 18px
    </Typography>
    <br />
    <Typography variant="caption">
      caption - Font size: 10px / Line heigh: 14px
    </Typography>
  </div>
);
