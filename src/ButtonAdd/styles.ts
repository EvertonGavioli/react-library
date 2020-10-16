import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import { rgba } from 'polished';

export const StyledButtonAdd = styled(Button)<{ bgcolor: string; issquare: string }>`
  min-height: 56px;
  min-width: 100%;

  font-size: 1rem;
  font-weight: 500;
  text-transform: none;
  align-items: center;
  justify-content: left;
  border-radius: 5px;
  border-color: ${(props) => props.bgcolor};

  color: ${(props) => props.bgcolor};
  background-color: ${(props) => props.theme.palette.background.default};

  &:hover {
    color: #fff;
    background-color: ${(props) => props.bgcolor};
    box-shadow: 0px 5px 15px 0px ${(props) => rgba(props.bgcolor, 0.5)};
  }

  ${(props) =>
    props.issquare === 'true' &&
    css`
      min-width: 104px;
      max-width: 104px;
      height: 104px;
      font-size: 0.75rem;
      justify-content: center;
    `}
`;

export const ContentWrapper = styled.div<{ issquare: string }>`
  display: flex;
  flex-direction: ${(props) => (props.issquare === 'true' ? 'column' : 'row')};
  align-items: center;
`;

export const LabelWrapper = styled.div<{ issquare: string }>`
  padding-left: ${(props) => (props.issquare === 'true' ? '0px' : '8px')};
`;
