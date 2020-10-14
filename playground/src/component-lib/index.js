/* eslint-disable */
import styled, { createGlobalStyle, css } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import 'typeface-montserrat';
import React from 'react';
import { rgba } from 'polished';
import { makeStyles, Button as Button$1, Typography as Typography$1 } from '@material-ui/core';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Global = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  ul {\n    list-style: none;\n    list-style-type: none;\n  }\n"], ["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  ul {\n    list-style: none;\n    list-style-type: none;\n  }\n"])));
var templateObject_1;

var breakpointValues = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};
var theme = createMuiTheme({
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
            fontSize: "2.5rem",
            lineHeight: 1.35,
            fontWeight: 700,
        },
        h5: {
            fontSize: "2rem",
            lineHeight: 1.38,
            fontWeight: 600,
        },
        h6: {
            fontSize: "1.625rem",
            lineHeight: 1.38,
            fontWeight: 600,
        },
        subtitle1: {
            fontSize: "1.25rem",
            lineHeight: 1.5,
            fontWeight: 600,
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.625,
            fontWeight: 500,
        },
        body2: {
            fontSize: "0.75rem",
            lineHeight: 1.5,
            fontWeight: 500,
        },
        caption: {
            fontSize: "0.625rem",
            lineHeight: 1.4,
            fontWeight: 500,
        },
    },
});
// export const theme = responsiveFontSizes(muiTheme, {
//   breakpoints: ["xs", "sm", "md", "lg", "xl"],
//   factor: 20,
// });

var breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};
var size = {
    xs: breakpoints.xs + "px",
    sm: breakpoints.sm + "px",
    md: breakpoints.md + "px",
    lg: breakpoints.lg + "px",
    xl: breakpoints.xl + "px",
};
var device = {
    xs: "(min-width: " + size.xs + ")",
    sm: "(min-width: " + size.sm + ")",
    md: "(min-width: " + size.md + ")",
    lg: "(min-width: " + size.lg + ")",
    xl: "(min-width: " + size.xl + ")",
};

var useStyles = makeStyles(function (theme) { return ({
    contained: {
        "&$disabled": {
            color: "#fff",
        },
    },
    outlined: {
        "&$disabled": {
            borderWidth: "2px",
            boxShadow: "none",
        },
    },
    disabled: {},
}); });
var StyledButton = styled(Button$1)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-height: 56px;\n  min-width: 136px;\n\n  font-size: 20px;\n  font-weight: 800;\n  text-transform: none;\n  border-radius: 100px;\n\n  ", "\n\n  @media ", " {\n    min-width: 200px;\n  }\n"], ["\n  min-height: 56px;\n  min-width: 136px;\n\n  font-size: 20px;\n  font-weight: 800;\n  text-transform: none;\n  border-radius: 100px;\n\n  ",
    "\n\n  @media ", " {\n    min-width: 200px;\n  }\n"])), function (props) {
    return props.issecondary
        ? css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n          color: ", ";\n          border: 2px solid ", ";\n          box-shadow: 0px 5px 15px 0px ", ";\n\n          &:hover {\n            border: 2px solid ", ";\n            box-shadow: 0px 5px 15px 0px ", ";\n          }\n        "], ["\n          color: ", ";\n          border: 2px solid ", ";\n          box-shadow: 0px 5px 15px 0px ", ";\n\n          &:hover {\n            border: 2px solid ", ";\n            box-shadow: 0px 5px 15px 0px ", ";\n          }\n        "])), props.bgcolor, rgba(props.bgcolor, 0.5), rgba(props.bgcolor, 0.15), rgba(props.bgcolor, 0.5), rgba(props.bgcolor, 0.5)) : css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          box-shadow: 0px 5px 15px 0px ", ";\n          background-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            box-shadow: 0px 5px 15px 0px ", ";\n          }\n        "], ["\n          box-shadow: 0px 5px 15px 0px ", ";\n          background-color: ", ";\n\n          &:hover {\n            background-color: ", ";\n            box-shadow: 0px 5px 15px 0px ", ";\n          }\n        "])), rgba(props.bgcolor, 0.35), props.bgcolor, props.bgcolor, rgba(props.bgcolor, 0.75));
}, device.sm);
var templateObject_1$1, templateObject_2, templateObject_3;

var Button = function (_a) {
    var _b = _a.bgcolor, bgcolor = _b === void 0 ? "#e0e0e0" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.isSecondary, isSecondary = _d === void 0 ? false : _d, onClick = _a.onClick, children = _a.children;
    var classes = useStyles();
    return (React.createElement(StyledButton, { color: "primary", bgcolor: bgcolor, disabled: disabled, issecondary: isSecondary ? true : undefined, onClick: onClick, variant: isSecondary ? "outlined" : "contained", classes: {
            contained: classes.contained,
            disabled: classes.disabled,
            outlined: classes.outlined,
        } }, children));
};

var StyledTypography = styled(Typography$1)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  font-weight: ", ";\n"], ["\n  font-weight: ", ";\n"])), function (props) { return props.fontWeight; });
var templateObject_1$2;

var returnFontWeight = function (value) {
    switch (value) {
        case "ultra-light":
            return 200;
        case "light":
            return 300;
        case "medium":
            return 400;
        case "regular":
            return 500;
        case "semi-bold":
            return 600;
        case "bold":
            return 700;
        case "extra-bold":
            return 800;
        case "black":
            return 900;
        default:
            return undefined;
    }
};
var Typography = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "body1" : _b, weight = _a.weight, children = _a.children;
    return (React.createElement(StyledTypography, { variant: variant, fontWeight: returnFontWeight(weight) }, children));
};

export { Button, Global, Typography, device, theme };
