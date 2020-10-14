import React from 'react';
interface ButtonProps {
    bgcolor: string;
    disabled: boolean;
    isSecondary: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
declare const Button: React.FC<ButtonProps>;
export { ButtonProps, Button };
