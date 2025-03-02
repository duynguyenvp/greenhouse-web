import React from 'react';
import * as S from './References.styles';
import { FacebookOutlined } from '@ant-design/icons';

const FacebookIcon = S.withStyles(FacebookOutlined);

export const References = () => {
  return (
    <S.ReferencesWrapper>
      <S.Text>
        &copy; {new Date().getFullYear()} Duy Nguyen. All rights reserved
      </S.Text>
    </S.ReferencesWrapper>
  );
};
