import React from 'react';
import * as S from './MainSider/MainSider.styles';
import { RightOutlined } from '@ant-design/icons';
import { useResponsive } from 'hooks/useResponsive';
import logo from 'assets/logo.png';

export const SiderLogo = ({ isSiderCollapsed, toggleSider }) => {
  const { tabletOnly } = useResponsive();

  const img = logo;

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to="/">
        <img src={img} alt="Greenhouse" width={48} height={48} />
        <S.BrandSpan>Greenhouse</S.BrandSpan>
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
          shape="circle"
          size="small"
          $isCollapsed={isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  );
};
