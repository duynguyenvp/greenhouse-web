import React from 'react';
import { Button as AntdButton } from 'antd';
import * as S from './Button.styles';

export const { Group: ButtonGroup } = AntdButton;

export const Button = React.forwardRef(
  ({ className, severity, noStyle, children, ...props }, ref) => (
    <S.Button ref={ref} className={className} $noStyle={noStyle} {...props} $severity={severity}>
      {children}
    </S.Button>
  ),
);
