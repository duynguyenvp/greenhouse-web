import React from "react";
import { useTranslation } from "react-i18next";
import { PageTitle } from "../components/common/PageTitle/PageTitle";
import { SignUpForm } from "../components/auth/SignUpForm/SignUpForm";
import { Card, Col, Row } from "antd";

const SignUpPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t("common.signUp")}</PageTitle>
      <Row>
        <Col xs={24} sm={24} xl={24}>
          <Card
            id="signUp"
            title={t("common.signUp")}
            padding="1.25rem"
          >
            <SignUpForm />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SignUpPage;
