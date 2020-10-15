import styled from 'styled-components';

import { Button } from '@material-ui/core';

export const StyledButtonAdd = styled(Button)<{ bgcolor: string }>`
  min-height: 56px;
  min-width: 100%;

  font-size: 1rem;
  font-weight: 500;
  text-transform: none;
  border-radius: 5px;
  border-color: ${(props) => props.bgcolor};

  color: ${(props) => props.bgcolor};
  background-color: ${(props) => props.theme.palette.background.default};

  &:hover {
    color: ${(props) => props.theme.palette.text.secondary};
    background-color: ${(props) => props.bgcolor};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;
