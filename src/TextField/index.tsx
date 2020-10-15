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
  helperText?: string;
  error?: boolean;
  value?: unknown;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TextField: React.FC<TextFieldProps> = ({
  autoFocus,
  fullWidth,
  label,
  placeholder,
  value,
  icon,
  helperText,
  error,
  onChange,
  onIconClick,
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
          <IconButton size="small" onClick={onIconClick}>
            {renderIcon()}
          </IconButton>
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
      helperText={helperText}
      error={error}
      value={value}
      onChange={onChange}
      InputLabelProps={{ classes: { root: myClasses.labelRoot, focused: myClasses.focused } }}
      InputProps={{
        classes: { underline: myClasses.underline },
        endAdornment: renderAdornment(),
      }}
      FormHelperTextProps={{ classes: { root: myClasses.helperTextRoot, error: myClasses.error } }}
    />
  );
};

export { TextFieldProps, TextField };
