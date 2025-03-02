import React from 'react';
import { Menu as AntdMenu } from 'antd';
import * as S from './Menu.styles';

export const { Item: MenuItem } = AntdMenu;

export const SubMenu = AntdMenu.SubMenu;

export const Menu = ({ children, ...props }) => {
  return <S.Menu {...props}>{children}</S.Menu>;
};
