import React from 'react';
import { AddIcon } from '../Icons';
import { StyledButtonAdd, ContentWrapper, LabelWrapper } from './styles';

interface ButtonAddProps {
  bgColor?: string;
  isSquare?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonAdd: React.FC<ButtonAddProps> = ({
  children,
  bgColor = '#ff4850',
  isSquare = false,
  onClick,
}) => {
  return (
    <StyledButtonAdd variant="outlined" bgcolor={bgColor} issquare={isSquare} onClick={onClick}>
      <ContentWrapper issquare={isSquare}>
        <AddIcon />
        <LabelWrapper issquare={isSquare}>{children}</LabelWrapper>
      </ContentWrapper>
    </StyledButtonAdd>
  );
};

export { ButtonAddProps, ButtonAdd };
