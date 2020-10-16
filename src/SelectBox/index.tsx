import React from 'react';

import { Typography } from '../Typography';

import { Container, BoxWrapper, TextWrapper } from './styles';

interface SelectBoxProps {
  id: string;
  text: string;
  selected: boolean;
  handleSelectBoxClick: (id: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  id = 'select-box-id',
  text = '',
  selected = false,
  children,
  handleSelectBoxClick,
}) => {
  return (
    <Container>
      <BoxWrapper
        selected={selected}
        onClick={(event) => {
          event.stopPropagation();
          handleSelectBoxClick(id);
        }}
      >
        {children}
      </BoxWrapper>
      <TextWrapper>
        <Typography variant="body1">{text}</Typography>
      </TextWrapper>
    </Container>
  );
};

export { SelectBox, SelectBoxProps };
