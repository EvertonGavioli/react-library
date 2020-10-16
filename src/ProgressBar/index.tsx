import React from 'react';

import { Typography } from '../Typography';

import { Container, Progress, Filler, LabelWrapper } from './styles';

interface ProgressBarProps {
  value: number;
  showLabel?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value = 0, showLabel = true }) => {
  function validValue(number: number) {
    if (number) {
      if (number < 0) return 0;
      if (number > 100) return 100;
      return number;
    }
    return 0;
  }

  return (
    <Container>
      <Progress>
        <Filler percent={validValue(value)} />
      </Progress>
      <LabelWrapper visible={showLabel}>
        <Typography variant="h5" color="primary">
          {`${validValue(value)}%`}
        </Typography>
      </LabelWrapper>
    </Container>
  );
};

export { ProgressBar, ProgressBarProps };
