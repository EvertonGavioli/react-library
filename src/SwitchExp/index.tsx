import React from 'react';

import { Container } from './styles';

interface SwitchExpProps {
  textForFalse: string;
  textForTrue: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const SwitchExp: React.FC<SwitchExpProps> = ({
  textForFalse = 'Texto False',
  textForTrue = 'Texto True',
  checked,
  disabled,
  onChange,
}) => {
  return (
    <Container>
      <input
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        id="exp-switch"
        type="checkbox"
        className="exp-switch-checkbox"
      />
      <label htmlFor="exp-switch" className="exp-switch-label">
        <div className="legend-wrapper">
          <span className="item-text-disabled">{textForFalse}</span>
          <span className="item-text-enabled">{textForTrue}</span>
        </div>
        <span className="exp-switch-button">{checked ? textForTrue : textForFalse}</span>
      </label>
    </Container>
  );
};

export { SwitchExpProps, SwitchExp };
