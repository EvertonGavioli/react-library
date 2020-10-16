import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 96px;
`;

export const BoxWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 88px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.palette.secondary.main};
  background-color: ${(props) => props.selected && props.theme.palette.secondary.main};
  box-shadow: ${(props) =>
    props.selected && `0px 5px 5px 0px ${rgba(props.theme.palette.secondary.main, 0.35)}`};

  &:hover {
    cursor: pointer;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 8px;
  align-items: center;
  justify-content: center;
`;
