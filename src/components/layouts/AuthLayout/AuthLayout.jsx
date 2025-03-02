import React from "react";
import { Outlet } from "react-router-dom";
import * as S from "./AuthLayout.styles";
import MainContent from "../main/MainContent/MainContent";

const AuthLayout = () => {
  return (
    <S.LayoutMaster>
      <MainContent id="main-content" $isTwoColumnsLayout={false}>
        <S.LayoutMain>
          <Outlet />
        </S.LayoutMain>
      </MainContent>
    </S.LayoutMaster>
  );
};

export default AuthLayout;
