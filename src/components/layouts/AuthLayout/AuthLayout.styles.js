import styled from "styled-components";
import { Button, Layout } from "antd";
import {
  FONT_SIZE,
  FONT_WEIGHT,
  media
} from "../../../styles/themes/constants";
import { BaseForm } from "components/common/forms/BaseForm/BaseForm";

import { Input as CommonInput } from "components/common/inputs/Input/Input";
import { InputPassword as CommonInputPassword } from "components/common/inputs/InputPassword/InputPassword";

export const LayoutMaster = styled(Layout)`
  height: 100vh;
`;

export const LayoutMain = styled(Layout)`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  @media only screen and ${media.lg} {
    margin-top: unset;
    justify-content: center;
  }
`;

export const FormTitle = styled.div`
  color: var(--primary-color);

  @media only screen and ${media.xs} {
    margin-bottom: 0.625rem;
    font-size: ${FONT_SIZE.lg};
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 1.5625rem;
  }

  @media only screen and ${media.md} {
    margin-bottom: 0.875rem;
    font-size: ${FONT_SIZE.xxl};
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 1.9375rem;
  }

  @media only screen and ${media.xl} {
    margin-bottom: 0.9375rem;
    font-size: ${FONT_SIZE.xxxl};
    font-weight: ${FONT_WEIGHT.extraBold};
    line-height: 2.125rem;
  }
`;

export const SubmitButton = styled(Button)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  width: 100%;
`;

export const Text = styled.span`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.regular};
  margin-top: 1rem;
`;

export const LinkText = styled(Text)`
  text-decoration: underline;
  color: var(--primary-color);
`;

export const FormItem = styled(BaseForm.Item)`
  margin-bottom: 0.75rem;
  & .ant-form-item-control-input {
    min-height: 3.125rem;
  }

  & .ant-form-item-explain-error {
    font-size: ${FONT_SIZE.xs};
  }

  & label {
    color: var(--primary-color);
    font-size: ${FONT_SIZE.xs};
    line-height: 1.25rem;
  }

  &.ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input-suffix {
    padding-right: 1.5rem;
  }
`;

export const FormInput = styled(CommonInput)`
  color: var(--text-main-color);
  background: transparent;

  & input.ant-input {
    background: transparent;
  }
`;

export const FormInputPassword = styled(CommonInputPassword)`
  color: var(--text-main-color);
  background: transparent;

  & input.ant-input {
    background: transparent;
  }
`;
