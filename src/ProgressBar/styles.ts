import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Progress = styled.div`
  width: 100%;
  height: 16px;
  background-color: #fff;
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
`;

export const Filler = styled.div<{ percent: number }>`
  height: calc(100% - 2px);
  width: ${(props) => `${props.percent}%`};
  background-color: ${(props) => props.theme.palette.secondary.main};
  border-radius: inherit;
  margin: 1px;
`;

export const LabelWrapper = styled.div<{ visible: boolean }>`
  display: ${(props) => !props.visible && 'none'};
  width: 10%;
  text-align: end;
`;
