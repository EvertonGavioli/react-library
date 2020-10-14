import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import Box from "./Others/Colors";
import { theme } from "../Styles/DefaultTheme";

export default {
  title: "Components/Colors",
  component: Box,
  decorators: [withKnobs],
};

export const All = () => (
  <>
    <div style={{ display: "flex" }}>
      <Box color={theme.palette.primary.dark} description="Primary - Dark" />
      <Box color={theme.palette.primary.main} description="Primary - Main" />
      <Box color={theme.palette.primary.light} description="Primary - Light" />
    </div>

    <hr />

    <div style={{ display: "flex" }}>
      <Box
        color={theme.palette.secondary.dark}
        description="Secondary - Dark"
      />
      <Box
        color={theme.palette.secondary.main}
        description="Secondary - Main"
      />
      <Box
        color={theme.palette.secondary.light}
        description="Secondary - Light"
      />
    </div>

    <hr />

    <div style={{ display: "flex" }}>
      <Box color={theme.palette.success.dark} description="Success - Dark" />
      <Box color={theme.palette.success.main} description="Success - Main" />
      <Box color={theme.palette.success.light} description="Success - Light" />
    </div>

    <hr />

    <div style={{ display: "flex" }}>
      <Box color={theme.palette.info.dark} description="Info - Dark" />
      <Box color={theme.palette.info.main} description="Info - Main" />
      <Box color={theme.palette.info.light} description="Info - Light" />
    </div>

    <hr />

    <div style={{ display: "flex" }}>
      <Box color={theme.palette.custom.grey.dark} description="Grey - Dark" />
      <Box color={theme.palette.custom.grey.main} description="Grey - Main" />
      <Box color={theme.palette.custom.grey.light} description="Grey - Light" />
    </div>
  </>
);

export const Primary = () => (
  <div style={{ display: "flex" }}>
    <Box color={theme.palette.primary.dark} description="Primary - Dark" />
    <Box color={theme.palette.primary.main} description="Primary - Main" />
    <Box color={theme.palette.primary.light} description="Primary - Light" />
  </div>
);

export const Secondary = () => (
  <div style={{ display: "flex" }}>
    <Box color={theme.palette.secondary.dark} description="Secondary - Dark" />
    <Box color={theme.palette.secondary.main} description="Secondary - Main" />
    <Box
      color={theme.palette.secondary.light}
      description="Secondary - Light"
    />
  </div>
);

export const Success = () => (
  <div style={{ display: "flex" }}>
    <Box color={theme.palette.success.dark} description="Success - Dark" />
    <Box color={theme.palette.success.main} description="Success - Main" />
    <Box color={theme.palette.success.light} description="Success - Light" />
  </div>
);

export const Info = () => (
  <div style={{ display: "flex" }}>
    <Box color={theme.palette.info.dark} description="Info - Dark" />
    <Box color={theme.palette.info.main} description="Info - Main" />
    <Box color={theme.palette.info.light} description="Info - Light" />
  </div>
);

export const Grey = () => (
  <div style={{ display: "flex" }}>
    <Box color={theme.palette.custom.grey.dark} description="Grey - Dark" />
    <Box color={theme.palette.custom.grey.main} description="Grey - Main" />
    <Box color={theme.palette.custom.grey.light} description="Grey - Light" />
  </div>
);
