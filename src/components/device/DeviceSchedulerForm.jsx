import { List, Modal } from "antd";
import React from "react";

export default function DeviceSchedulerForm(props) {
  const { visible, onClose, selectedDevice } = props;
  return (
    <>
      <Modal
        title={`Cài đặt lịch cho ${selectedDevice?.name}`}
        open={visible}
        onCancel={onClose}
        footer={null}
      >
        <List
          size="small"
          dataSource={selectedDevice?.schedules || []}
          renderItem={(item, index) => (
            <List.Item key={index}>{item}</List.Item>
          )}
        />
        <p>Chức năng cài đặt lịch sẽ được thêm sau.</p>
      </Modal>
    </>
  );
}
