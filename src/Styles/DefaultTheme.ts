import { createMuiTheme } from "@material-ui/core/styles";

const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      dark: "#b3040d",
      main: "#eb202b",
      light: "#ff4850",
    },

    secondary: {
      dark: "#e0ab00",
      main: "#fdc91f",
      light: "#fddb69",
    },

    success: {
      dark: "#27aa3d",
      main: "#44d25c",
      light: "#71de83",
    },

    info: {
      dark: "#194b80",
      main: "#086ed8",
      light: "#4ba3ff",
    },

    grey: {
      // dark: "#1c130e",
      // main: "#413d3d",
      // light: "#c1c2c3",
    },

    background: {
      default: "#fff",
    },

    text: {
      disabled: "#fff",
    },

    action: {
      hover: "#fff",
      disabledBackground: "#c1c2c3",
    },

    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },

  breakpoints: { values: breakpointValues },

  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),

    fontSize: 16,

    h4: {
      fontSize: "2.5rem", //40px
      lineHeight: 1.35,
      fontWeight: 700,
    },
    h5: {
      fontSize: "2rem", //32px
      lineHeight: 1.38,
      fontWeight: 600,
    },
    h6: {
      fontSize: "1.625rem", //26px
      lineHeight: 1.38,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1.25rem", //20px
      lineHeight: 1.5,
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem", //16px
      lineHeight: 1.625,
      fontWeight: 500,
    },
    body2: {
      fontSize: "0.75rem", //12px
      lineHeight: 1.5,
      fontWeight: 500,
    },
    caption: {
      fontSize: "0.625rem", //10px
      lineHeight: 1.4,
      fontWeight: 500,
    },

    // body1: {
    //   "@media (min-width: 320px)": {
    //     fontSize: "calc(0.875rem + ((1vw - 3.2px) * 0.125))",
    //   },
    //   "@media (min-width: 1920px)": {
    //     fontSize: "16px",
    //   },
    // },
  },
});

// export const theme = responsiveFontSizes(muiTheme, {
//   breakpoints: ["xs", "sm", "md", "lg", "xl"],
//   factor: 20,
// });
