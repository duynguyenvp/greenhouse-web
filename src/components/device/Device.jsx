import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  FieldTimeOutlined,
  FormOutlined,
  HarmonyOSOutlined,
  PoweroffOutlined
} from "@ant-design/icons";
import { Button, Card, List, Space, Tooltip } from "antd";
import React, { useMemo } from "react";
import "./style.css";

export default function Device(props) {
  const { device, toggleDevice, changeDirection, openScheduleModal, onEdit } =
    props;

  const actions = useMemo(() => {
    if (device.type === "switch") {
      return [
        <Button
          disabled={device.status}
          onClick={() => toggleDevice(device.id)}
          color={"primary"}
          variant="link"
          icon={<HarmonyOSOutlined />}
        >
          ON
        </Button>,
        <Button
          disabled={!device.status}
          onClick={() => toggleDevice(device.id)}
          variant="link"
          color={"danger"}
          icon={<PoweroffOutlined />}
        >
          OFF
        </Button>
      ];
    }
    return [
      <Button
        value="reverse"
        onClick={() => changeDirection(device.id, "reverse")}
        variant="link"
        color={device.direction === "reverse" ? "primary" : "default"}
        disabled={device.direction === "reverse"}
        icon={<DoubleLeftOutlined />}
      >
        Lùi
      </Button>,
      <Button
        value="stopped"
        onClick={() => changeDirection(device.id, "stopped")}
        variant="link"
        color={"danger"}
        disabled={device.direction === "stopped"}
        icon={<PoweroffOutlined />}
      >
        Dừng
      </Button>,
      <Button
        value="forward"
        onClick={() => changeDirection(device.id, "forward")}
        variant="link"
        color={device.direction === "forward" ? "primary" : "default"}
        disabled={device.direction === "forward"}
        icon={<DoubleRightOutlined />}
      >
        Tiến
      </Button>
    ];
  }, [device]);

  const isEmpty = useMemo(() => !device?.schedules?.length, [device]);
  return (
    <>
      <Card
        className={isEmpty ? "hidden-body" : ""}
        title={device.name}
        actions={actions}
        extra={
          <>
            <Tooltip title="Add new Scheduler">
              <Button
                onClick={() => openScheduleModal(device)}
                variant="link"
                color={"default"}
                icon={<FieldTimeOutlined />}
              />
            </Tooltip>
            <Tooltip title="Edit this device">
              <Button
                onClick={() => onEdit(device)}
                variant="link"
                color={"default"}
                icon={<FormOutlined />}
              />
            </Tooltip>
          </>
        }
      >
        {isEmpty && (
          <List
            size="small"
            dataSource={device.schedules.slice(0, 3)}
            renderItem={(item, index) => (
              <List.Item key={index}>{item}</List.Item>
            )}
          />
        )}
      </Card>
    </>
  );
}
