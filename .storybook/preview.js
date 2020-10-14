import React from "react";

import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { addDecorator } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import { theme as DefaultTheme } from "../src/Styles/DefaultTheme";
import GlobalStyles from "../src/Styles/Global";

const themes = { DefaultTheme: DefaultTheme };
const themeNames = Object.keys(themes);

addDecorator((story) => {
  const theme = select("Theme", themeNames, themeNames[0], "Themes");
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={themes[theme]}>
        <StyledThemeProvider theme={themes[theme]}>
          <GlobalStyles />
          {story()}
        </StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
