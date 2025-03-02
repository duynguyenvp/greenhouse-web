import React from 'react';
import { BaseForm } from 'components/common/forms//BaseForm/BaseForm';
import { BaseButtonsGroup } from 'components/common/forms/components/BaseButtonsGroup/BaseButtonsGroup';
import { BaseFormTitle } from 'components/common/forms/components/BaseFormTitle/BaseFormTitle';
import { BaseFormItem } from 'components/common/forms/components/BaseFormItem/BaseFormItem';
import { BaseFormList } from 'components/common/forms/components/BaseFormList/BaseFormList';

export const BaseButtonsForm = ({
  form,
  isFieldsChanged,
  setFieldsChanged,
  footer,
  loading = false,
  children,
  ...props
}) => {
  const [formDefault] = BaseForm.useForm();
  const currentForm = form || formDefault;

  const onCancel = () => {
    currentForm?.resetFields();
    setFieldsChanged && setFieldsChanged(false);
  };

  return (
    <BaseForm form={currentForm} {...props}>
      {children}
      {isFieldsChanged && (footer || <BaseButtonsGroup loading={loading} onCancel={onCancel} />)}
    </BaseForm>
  );
};

BaseButtonsForm.Title = BaseFormTitle;
BaseButtonsForm.Item = BaseFormItem;
BaseButtonsForm.List = BaseFormList;
BaseButtonsForm.useForm = BaseForm.useForm;
BaseButtonsForm.Provider = BaseForm.Provider;
