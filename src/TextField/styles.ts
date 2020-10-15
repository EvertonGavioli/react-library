import styled from 'styled-components';

import { makeStyles, TextField as MuiTextField } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  underline: {
    '&:before': {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
    '&:after': {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
    '&:hover:not($disabled):not($focused):not($error):before': {
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
  },

  labelRoot: {
    '&$focused': {
      color: theme.palette.text.primary,
      fontSize: '1.25rem',
    },
  },

  helperTextRoot: {
    '&$error': {
      textAlign: 'right',
    },
  },

  disabled: {},
  focused: {},
  error: {},
}));

export const StyledTextField = styled(MuiTextField)``;
