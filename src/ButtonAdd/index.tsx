import React from 'react';
import { IconMais } from '../Icons';

import { StyledButtonAdd, ContentWrapper, LabelWrapper } from './styles';

interface ButtonAddProps {
  bgColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ children, bgColor = '#ff4850', onClick }) => {
  return (
    <StyledButtonAdd variant="outlined" bgcolor={bgColor} onClick={onClick}>
      <ContentWrapper>
        <IconMais style={{ fontSize: 24 }} />
        <LabelWrapper>{children}</LabelWrapper>
      </ContentWrapper>
    </StyledButtonAdd>
  );
};

export { ButtonAddProps, ButtonAdd };
