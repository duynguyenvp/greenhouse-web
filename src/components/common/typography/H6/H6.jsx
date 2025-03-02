import React from 'react';
import * as S from './H6.styles';

export const H6 = ({ className, children }) => (
  <S.Text className={className} level={5}>
    {children}
  </S.Text>
);
