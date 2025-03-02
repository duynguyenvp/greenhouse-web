import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Modal, Form, Input, Select, Button } from "antd";
import { DEVICE_TYPE_ENUM } from "../../constants/enums/deviceType";

const DeviceForm = ({ visible, onClose, onSubmit, initialValues }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    } else {
      reset({ name: "", type: "", status: "", command: "" });
    }
  }, [initialValues, reset]);

  return (
    <Modal
      title={initialValues ? "Chỉnh sửa thiết bị" : "Thêm thiết bị"}
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label="Tên thiết bị"
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: "Tên thiết bị không được để trống" }}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="Loại thiết bị"
          validateStatus={errors.type ? "error" : ""}
          help={errors.type?.message}
        >
          <Controller
            name="type"
            control={control}
            rules={{ required: "Vui lòng chọn loại thiết bị" }}
            render={({ field }) => (
              <Select {...field}>
                <Select.Option value={DEVICE_TYPE_ENUM.DEVICE_SWITCH}>
                  Công tắc
                </Select.Option>
                <Select.Option value={DEVICE_TYPE_ENUM.DEVICE_MOTOR}>
                  Động cơ
                </Select.Option>
              </Select>
            )}
          />
        </Form.Item>

        <Form.Item
          label="Lệnh điều khiển"
          validateStatus={errors.command ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="command"
            control={control}
            rules={{ required: "Lệnh điều khiển không được để trống" }}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Lưu
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={onClose}>
            Hủy
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DeviceForm;
