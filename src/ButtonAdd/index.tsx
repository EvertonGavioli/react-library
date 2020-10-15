import React from 'react';
import { IconMais } from '../Icons';
import { StyledButtonAdd, ContentWrapper } from './styles';

interface ButtonAddProps {
  bgColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ children, bgColor = '#ff4850', onClick }) => {
  return (
    <StyledButtonAdd variant="outlined" bgcolor={bgColor} onClick={onClick}>
      <ContentWrapper>
        <IconMais style={{ fontSize: 24 }} />
        {children}
      </ContentWrapper>
    </StyledButtonAdd>
  );
};

export { ButtonAddProps, ButtonAdd };
