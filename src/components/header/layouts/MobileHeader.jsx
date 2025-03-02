import React from 'react';
import { Col, Row } from 'antd';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
import * as S from '../Header.styles';

export const MobileHeader = ({ toggleSider, isSiderOpened }) => {
  return (
    <Row justify="space-between" align="middle">
      <Col>
        <ProfileDropdown />
      </Col>

      <S.BurgerCol>
        <S.MobileBurger onClick={toggleSider} isCross={isSiderOpened} />
      </S.BurgerCol>
    </Row>
  );
};
