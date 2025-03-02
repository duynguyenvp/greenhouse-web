import React from 'react';
import { Col, Row } from 'antd';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
import * as S from '../Header.styles';

export const DesktopHeader = ({ isTwoColumnsLayout = false }) => {
  const leftSide = isTwoColumnsLayout ? (
    <S.SearchColumn xl={16} xxl={17}>
      <Row justify="space-between">
        <Col>
          {/* <S.GHButton /> */}
        </Col>
      </Row>
    </S.SearchColumn>
  ) : (
    <>
      <Col>
        {/* <S.GHButton /> */}
      </Col>
    </>
  );

  return (
    <Row justify="space-between" align="middle">
      {leftSide}

      <S.ProfileColumn xl={8} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
        <Row align="middle" justify="end" gutter={[10, 10]}>
          <Col>
            <ProfileDropdown />
          </Col>
        </Row>
      </S.ProfileColumn>
    </Row>
  );
};
