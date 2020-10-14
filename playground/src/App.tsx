import React from "react";
import {
  Button,
  theme as DefaultTheme,
  Global as GlobalStyles,
} from "./component-lib";

import { StylesProvider, ThemeProvider } from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={DefaultTheme}>
        <ThemeProvider theme={DefaultTheme}>
          <GlobalStyles />
          <Button bgcolor="#7159c1" onClick={() => console.log("Click!")}>
            Texto
          </Button>
        </ThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
};

export default App;
