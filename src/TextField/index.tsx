import React from 'react';

import { IconButton, InputAdornment } from '@material-ui/core';

import { AddIcon, SearchIcon, VisibilityOutlinedIcon } from '../Icons';

import { useStyles, StyledTextField } from './styles';

type IconType = 'AddIcon' | 'SearchIcon' | 'VisibilityOutlinedIcon';

interface TextFieldProps {
  autoFocus?: boolean;
  fullWidth?: boolean;
  label?: string;
  placeholder?: string;
  icon?: IconType;
  value?: unknown;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const TextField: React.FC<TextFieldProps> = ({
  autoFocus,
  fullWidth,
  label,
  placeholder,
  value,
  icon,
  onChange,
}) => {
  const myClasses = useStyles();

  const renderIcon = () => {
    switch (icon) {
      case 'AddIcon':
        return <AddIcon color="primary" />;
      case 'SearchIcon':
        return <SearchIcon color="primary" />;
      case 'VisibilityOutlinedIcon':
        return <VisibilityOutlinedIcon color="primary" />;
      default:
        return undefined;
    }
  };

  const renderAdornment = () => {
    if (icon) {
      return (
        <InputAdornment position="end">
          <IconButton size="small">{renderIcon()}</IconButton>
        </InputAdornment>
      );
    }
    return undefined;
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
