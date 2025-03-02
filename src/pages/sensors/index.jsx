import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../../components/common/PageTitle/PageTitle';

const SensorsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.sensors')}</PageTitle>
      <Row gutter={[30, 30]}>
        <Col id="line-race" xs={24}>
          The settings page.
        </Col>
      </Row>
    </>
  );
};

export default SensorsPage;
