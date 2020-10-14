import React from "react";
import { StylesProvider, ThemeProvider } from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme as DefaultTheme, Global as GlobalStyles } from "./component-lib";

import DevelopmentPage from "./pages/DevelopmentPages";

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={DefaultTheme}>
        <ThemeProvider theme={DefaultTheme}>
          <GlobalStyles />
          <DevelopmentPage />
        </ThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
};

export default App;
