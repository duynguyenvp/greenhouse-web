import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as S from "./ProfileOverlay.styles";
import { DropdownMenu } from "../../../../header/Header.styles";
import authActions from "stores/actions/authAction";
import { useDispatch } from "react-redux";

export const ProfileOverlay = ({ ...props }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSigout = e => {
    e.preventDefault();
    dispatch(authActions.logout());
    navigate("/auth/login");
  };

  return (
    <DropdownMenu selectable={false} {...props}>
      <S.MenuItem key={0}>
        <S.Text>
          <Link to="/profile">{t("profile.title")}</Link>
        </S.Text>
      </S.MenuItem>
      <S.ItemsDivider />
      <S.MenuItem key={1}>
        <S.Text>
          <Link onClick={onSigout}>{t("header.logout")}</Link>
        </S.Text>
      </S.MenuItem>
    </DropdownMenu>
  );
};
