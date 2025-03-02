import React from 'react';
import styled from 'styled-components';
import { GlobalSpinner } from './GlobalSpinner';

export const Loading = ({ size, color }) => {
  const spinnerColor = color;

  return (
    <SpinnerContainer>
      <GlobalSpinner size={size} color={spinnerColor} />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
