import React, { ComponentProps } from 'react';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { BaseFormTitle } from '../components/BaseFormTitle/BaseFormTitle';
import { BaseFormItem } from '../components/BaseFormItem/BaseFormItem';
import { BaseFormList } from '../components/BaseFormList/BaseFormList';
import { notificationController } from '../../../../controllers/notificationController';

export const BaseForm = ({ onFinishFailed, layout = 'vertical', ...props }) => {
  const { t } = useTranslation();

  const onFinishFailedDefault = (error) => {
    notificationController.error({
      message: t('common.error'),
      description: error.errorFields[0].errors,
    });
  };

  return <Form onFinishFailed={onFinishFailed || onFinishFailedDefault} layout={layout} {...props} />;
};

BaseForm.Title = BaseFormTitle;
BaseForm.Item = BaseFormItem;
BaseForm.List = BaseFormList;
BaseForm.useForm = Form.useForm;
BaseForm.Provider = Form.Provider;
