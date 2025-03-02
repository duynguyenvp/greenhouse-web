import React from "react";
import { DeploymentUnitOutlined, HomeOutlined } from "@ant-design/icons";
import SensorIcon from "../../../../assets/icons/sensor.svg?react";

export const sidebarNavigation = [
  {
    title: "common.home",
    key: "home",
    url: "/home",
    icon: <HomeOutlined />
  },
  {
    title: "common.devices",
    key: "devices",
    url: "/devices",
    icon: <DeploymentUnitOutlined />
  },
  {
    title: "common.sensors",
    key: "sensors",
    url: "/sensors",
    icon: <SensorIcon />
  }
];
