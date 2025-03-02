import React, { useMemo, useState } from "react";
import { Select, Row, Col, Button, Modal, List, Grid } from "antd";
import { useTranslation } from "react-i18next";
import { PageTitle } from "../../components/common/PageTitle/PageTitle";
import { PlusOutlined } from "@ant-design/icons";
import Device from "components/device/Device";
import DeviceForm from "components/device/DeviceForm";
import DeviceSchedulerForm from "components/device/DeviceSchedulerForm";

const { Option } = Select;
const { useBreakpoint } = Grid;

const initialItems = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: `Thiết bị ${i + 1}`,
  type: i % 2 === 0 ? "switch" : "motor",
  status: false,
  direction: "stopped",
  schedules: [11,22,88]
}));

const DevicePage = () => {
  const { t } = useTranslation();
  const screens = useBreakpoint();
  const [columns, setColumns] = useState(2);
  const [devices, setDevices] = useState(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggleDevice = id => {
    setDevices(prev =>
      prev.map(device =>
        device.id === id ? { ...device, status: !device.status } : device
      )
    );
  };

  const changeDirection = (id, direction) => {
    setDevices(prev =>
      prev.map(device => (device.id === id ? { ...device, direction } : device))
    );
  };

  const openScheduleModal = device => {
    setSelectedDevice(device);
    setIsModalOpen(true);
  };

  const openCreateNewDeviceModal = () => {
    setSelectedDevice(null);
    setIsAddModalOpen(true);
  };
  const openEditDeviceModal = device => {
    setSelectedDevice(device);
    setIsAddModalOpen(true);
  };

  const isSmallScreen = useMemo(() => {
    if (
      (screens.xs === true && screens.sm === false) ||
      (screens.sm === true && screens.md === false)
    )
      return true;
    return false;
  }, [screens]);

  return (
    <>
      <PageTitle>{t("common.devices")}</PageTitle>
      <Row gutter={[30, 30]}>
        <Col id="line-race" xs={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 16
            }}
          >
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={openCreateNewDeviceModal}
            >
              Thêm thiết bị
            </Button>
            {!isSmallScreen && (
              <Select
                defaultValue={2}
                style={{ width: 120 }}
                onChange={value => setColumns(value)}
              >
                <Option value={2}>2 Cột</Option>
                <Option value={3}>3 Cột</Option>
              </Select>
            )}
          </div>

          <Row gutter={[16, 16]}>
            {devices.map(device => (
              <Col
                key={device.id}
                xs={24}
                sm={24}
                md={isSmallScreen ? 24 : 24 / columns}
              >
                <Device
                  device={device}
                  isSmallScreen={isSmallScreen}
                  toggleDevice={toggleDevice}
                  changeDirection={changeDirection}
                  openScheduleModal={openScheduleModal}
                  onEdit={openEditDeviceModal}
                />
              </Col>
            ))}
          </Row>

          <DeviceSchedulerForm
            selectedDevice={selectedDevice}
            visible={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
            }}
          />

          <DeviceForm
            selectedDevice={selectedDevice}
            visible={isAddModalOpen}
            onClose={() => {
              setIsAddModalOpen(false);
            }}
            onSubmit={data => {
              console.log(data);
            }}
            initialValues={selectedDevice}
          />
        </Col>
      </Row>
    </>
  );
};

export default DevicePage;
