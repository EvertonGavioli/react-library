import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { rgba } from 'polished';

export const StyledButtonAdd = styled(Button)<{ bgcolor: string }>`
  min-height: 56px;
  min-width: 100%;

  font-size: 1rem;
  font-weight: 500;
  text-transform: none;
  justify-content: left;
  border-radius: 5px;
  border-color: ${(props) => props.bgcolor};

  color: ${(props) => props.bgcolor};
  background-color: ${(props) => props.theme.palette.background.default};

  &:hover {
    color: ${(props) => props.theme.palette.text.secondary};
    background-color: ${(props) => props.bgcolor};
    box-shadow: 0px 5px 15px 0px ${(props) => rgba(props.bgcolor, 0.5)};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelWrapper = styled.div`
  padding-left: 8px;
`;
