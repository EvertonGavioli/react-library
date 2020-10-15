import React from 'react';

import { StyledTypography } from './styles';

type Variants = 'h4' | 'h5' | 'h6' | 'subtitle1' | 'body1' | 'body2' | 'caption';
type FontWeight =
  | 'ultra-light'
  | 'light'
  | 'medium'
  | 'regular'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'black';

const returnFontWeight = (value?: FontWeight) => {
  switch (value) {
    case 'ultra-light':
      return 200;
    case 'light':
      return 300;
    case 'medium':
      return 400;
    case 'regular':
      return 500;
    case 'semi-bold':
      return 600;
    case 'bold':
      return 700;
    case 'extra-bold':
      return 800;
    case 'black':
      return 900;
    default:
      return undefined;
  }
};

interface TypographyProps {
  variant?: Variants;
  weight?: FontWeight;
}

const Typography: React.FC<TypographyProps> = ({ variant = 'body1', weight, children }) => {
  return (
    <StyledTypography variant={variant} fontWeight={returnFontWeight(weight)}>
      {children}
    </StyledTypography>
  );
};

export { TypographyProps, Typography };
