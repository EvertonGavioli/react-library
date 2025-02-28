import React from 'react';

import { useStyles, StyledButton } from './styles';

interface ButtonProps {
  bgcolor?: string;
  disabled?: boolean;
  isSecondary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  bgcolor = '#ff4850',
  disabled = false,
  isSecondary = false,
  onClick,
  children,
}) => {
  const classes = useStyles();

  return (
    <StyledButton
      color="primary"
      bgcolor={bgcolor}
      disabled={disabled}
      issecondary={isSecondary ? 'true' : 'false'}
      onClick={onClick}
      variant={isSecondary ? 'outlined' : 'contained'}
      classes={{
        contained: classes.contained,
        disabled: classes.disabled,
        outlined: classes.outlined,
      }}
    >
      {children}
    </StyledButton>
  );
};

export { ButtonProps, Button };
