import React from "react";
import { useTranslation } from "react-i18next";
import { LoginForm } from "../components/auth/LoginForm/LoginForm";
import { PageTitle } from "../components/common/PageTitle/PageTitle";
import { Card, Col, Row } from "antd";

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t("common.login")}</PageTitle>
      <Row>
        <Col xs={24} sm={24} xl={24}>
          <Card
            id="login"
            title={t("common.login")}
            padding="1.25rem"
          >
            <LoginForm />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
