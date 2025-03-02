import React from 'react';
import * as S from './InputPassword.styles';

export const InputPassword = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <S.InputPassword ref={ref} className={className} {...props}>
      {children}
    </S.InputPassword>
  ),
);
