import React from 'react';

import { IconButton, InputAdornment } from '@material-ui/core';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

import { useStyles, StyledTextField } from './styles';

interface TextFieldProps {
  autoFocus?: boolean;
  fullWidth?: boolean;
  label?: string;
  placeholder?: string;
  value?: unknown;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const TextField: React.FC<TextFieldProps> = ({
  autoFocus,
  fullWidth,
  label,
  placeholder,
  value,
  onChange,
}) => {
  const myClasses = useStyles();

  const renderAdornment = () => {
    return (
      <InputAdornment position="end">
        <IconButton>
          <VisibilityOutlinedIcon />
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <StyledTextField
      autoFocus={autoFocus}
      fullWidth={fullWidth}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputLabelProps={{ classes: { root: myClasses.labelRoot, focused: myClasses.focused } }}
      InputProps={{
        classes: { underline: myClasses.underline },
        endAdornment: renderAdornment(),
      }}
    />
  );
};

export { TextFieldProps, TextField };
