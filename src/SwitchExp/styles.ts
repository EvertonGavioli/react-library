import styled from 'styled-components';

export const Container = styled.div`
  font-size: 0.75rem;
  font-family: ${(props) => props.theme.typography.fontFamily};

  .exp-switch-checkbox {
    display: none;
  }

  .exp-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    height: 32px;
    background: ${(props) => props.theme.palette.secondary.main};
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
    padding: 0px 4px;
  }

  .exp-switch-button {
    content: '';
    position: absolute;
    width: calc(50% - 4px);
    height: 24px;
    border-radius: 100px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    font-weight: 700;
  }

  .exp-switch-checkbox:checked + .exp-switch-label .exp-switch-button {
    transform: translateX(100%);
  }

  .exp-switch-checkbox:disabled + .exp-switch-label {
    background: #c1c2c3;
  }

  .legend-wrapper {
    display: flex;
    flex: 1;
    align-items: center;
    overflow: hidden;
  }

  .legend-wrapper .item-text-disabled {
    display: flex;
    flex: 0.5;
    justify-content: center;
    overflow: hidden;
  }

  .legend-wrapper .item-text-enabled {
    display: flex;
    flex: 0.5;
    justify-content: center;
    overflow: hidden;
  }
`;
