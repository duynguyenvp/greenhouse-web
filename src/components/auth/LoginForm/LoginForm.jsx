import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BaseForm } from "../../common/forms/BaseForm/BaseForm";
import responseExtractor from "helpers/responseExtractor";
import userService from "services/user";
import { useDispatch } from "react-redux";
import authActions from "stores/actions/authAction";
import * as Auth from "components/layouts/AuthLayout/AuthLayout.styles";
import { notificationController } from "controllers/notificationController";

export const initValues = {
  email: "",
  password: ""
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async values => {
    setLoading(true);
    const params = {
      username: values.username,
      password: values.password
    };

    try {
      const response = await userService.login(params);
      const { isSuccess, data, errorMessage, errorMessageDetails } =
        responseExtractor.extract(response);
      if (isSuccess) {
        dispatch(authActions.login(data));
        navigate("/");
      } else {
        notificationController.error({
          message: errorMessage,
          description: errorMessageDetails
        });
        console.error(errorMessage);
      }
    } catch (error) {
      const { errorMessage, errorMessageDetails } =
        responseExtractor.extractError(error);
      notificationController.error({
        message: errorMessage,
        description: errorMessageDetails
      });
      console.error(error);
    } finally {
      setLoading(false);
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
        name="username"
        label={t("common.username")}
        rules={[{ required: true, message: t("common.requiredField") }]}
      >
        <Auth.FormInput placeholder={t("common.email")} />
      </Auth.FormItem>
      <Auth.FormItem
        label={t("common.password")}
        name="password"
        rules={[{ required: true, message: t("common.requiredField") }]}
      >
        <Auth.FormInputPassword placeholder={t("common.password")} />
      </Auth.FormItem>
      <BaseForm.Item noStyle>
        <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
          {t("common.login")}
        </Auth.SubmitButton>
      </BaseForm.Item>
      <BaseForm.Item noStyle>
        <Auth.Text>
          {t("login.noAccount")}{" "}
          <Link to="/auth/sign-up">
            <Auth.LinkText>{t("common.here")}</Auth.LinkText>
          </Link>
        </Auth.Text>
      </BaseForm.Item>
    </BaseForm>
  );
};
