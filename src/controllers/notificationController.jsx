import React from 'react';
import { notification } from 'antd';
import styled from 'styled-components';
import { CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled, StopFilled } from '@ant-design/icons';

const IconWrapper = styled.div`
  font-size: ${(props) => (props.$isOnlyTitle ? '2rem' : '3rem')};
  line-height: 2rem;
`;

const EmptyDescription = styled.div`
  margin-top: -0.75rem;
`;

const openSuccessNotification = (config) => {
  notification.success({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <CheckCircleFilled className="success-icon" />
      </IconWrapper>
    ),
    message: <div className={`title ${!config.description && `title-only`}`}>{config.message}</div>,
    description: config.description ? <div className="description">{config.description}</div> : <EmptyDescription />,
    className: config.description ? '' : 'notification-without-description',
  });
};

const openInfoNotification = (config) => {
  notification.info({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <InfoCircleFilled className="info-icon" />
      </IconWrapper>
    ),
    message: <div className={`title ${!config.description && `title-only`}`}>{config.message}</div>,
    description: config.description ? <div className="description">{config.description}</div> : <EmptyDescription />,
    className: config.description ? '' : 'notification-without-description',
  });
};

const openWarningNotification = (config) => {
  notification.warning({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <ExclamationCircleFilled className="warning-icon" />
      </IconWrapper>
    ),
    message: <div className={`title ${!config.description && `title-only`}`}>{config.message}</div>,
    description: config.description ? <div className="description">{config.description}</div> : <EmptyDescription />,
    className: config.description ? '' : 'notification-without-description',
  });
};

const openErrorNotification = (config) => {
  notification.error({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <StopFilled className="error-icon" />
      </IconWrapper>
    ),
    message: <div className={`title ${!config.description && `title-only`}`}>{config.message}</div>,
    description: config.description ? <div className="description">{config.description}</div> : <EmptyDescription />,
    className: config.description ? '' : 'notification-without-description',
  });
};

export const notificationController = {
  success: openSuccessNotification,
  info: openInfoNotification,
  warning: openWarningNotification,
  error: openErrorNotification,
};
