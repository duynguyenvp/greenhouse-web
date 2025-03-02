import React from 'react';
import { Avatar, Col, Row } from 'antd';
import { Dropdown } from '../../../../common/Dropdown/Dropdown';
import { H6 } from '../../../../common/typography/H6/H6';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
import * as S from './ProfileDropdown.styles';
import { useResponsive } from 'hooks/useResponsive';
import authLocalStorage from 'helpers/authLocalStorage';
import defaultAvatar from "../../../../../assets/images/avatar.jpg";

export const ProfileDropdown = () => {
  const { isTablet } = useResponsive();

  const user = authLocalStorage.getUser();

  return user.username ? (
    <Dropdown overlay={<ProfileOverlay />} trigger={['click']}>
      <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle">
        <Col>
          <Avatar src={user.imgUrl ?? defaultAvatar} alt="User" shape="circle" size={40} />
        </Col>
        {isTablet && (
          <Col>
            <H6>{`${user.username}`}</H6>
          </Col>
        )}
      </S.ProfileDropdownHeader>
    </Dropdown>
  ) : null;
};
