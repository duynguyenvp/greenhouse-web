import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BaseForm } from "../../common/forms/BaseForm/BaseForm";
import * as Auth from "../../layouts/AuthLayout/AuthLayout.styles";
import userService from "services/user";
import { notificationController } from "controllers/notificationController";
import responseExtractor from "helpers/responseExtractor";

const initValues = {
  name: "",
  username: "",
  password: "",
  confirmPassword: ""
};

export const SignUpForm = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async values => {
    setLoading(true);

    const params = {
      name: values.name,
      username: values.username,
      password: values.password
    };

    try {
      const response = await userService.register(params);
      const { isSuccess, errorMessage, errorMessageDetails } = responseExtractor.extract(response);
      if (isSuccess) {
        notificationController.success({
          message: t("auth.signUpSuccessMessage"),
          description: t("auth.signUpSuccessDescription")
        });
        navigate("/auth/login");
      } else {
        notificationController.error({
          message: errorMessage,
          description: errorMessageDetails
        });
        console.error(errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BaseForm
      layout="vertical"
      onFinish={handleSubmit}
      requiredMark="optional"
      initialValues={initValues}
    >
      <Auth.FormItem
        name="name"
        label={t("common.name")}
        rules={[{ required: true, message: t("common.requiredField") }]}
      >
        <Auth.FormInput placeholder={t("common.name")} />
      </Auth.FormItem>
      <Auth.FormItem
        name="username"
        label={t("common.username")}
        rules={[{ required: true, message: t("common.requiredField") }]}
      >
        <Auth.FormInput placeholder={t("common.username")} />
      </Auth.FormItem>
      <Auth.FormItem
        label={t("common.password")}
        name="password"
        rules={[
          { min: 6, message: t('common.passwordLength') },
          { required: true, message: t("common.requiredField") }]}
      >
        <Auth.FormInputPassword placeholder={t("common.password")} />
      </Auth.FormItem>
      <Auth.FormItem
        label={t("common.confirmPassword")}
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          { required: true, message: t("common.requiredField") },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(t("common.confirmPasswordError"))
              );
            }
          })
        ]}
      >
        <Auth.FormInputPassword placeholder={t("common.confirmPassword")} />
      </Auth.FormItem>
      <BaseForm.Item noStyle>
        <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
          {t("common.signUp")}
        </Auth.SubmitButton>
      </BaseForm.Item>
      <Auth.Text>
        {t("signup.alreadyHaveAccount")}{" "}
        <Link to="/auth/login">
          <Auth.LinkText>{t("common.here")}</Auth.LinkText>
        </Link>
      </Auth.Text>
    </BaseForm>
  );
};
