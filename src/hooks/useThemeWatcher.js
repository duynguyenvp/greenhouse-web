import { useEffect, useRef } from "react";
import { ConfigProvider } from "antd";
import { themeObject } from "../styles/themes/themeVariables";

const theme = "light";
export const useThemeWatcher = () => {
  const root = useRef(document.querySelector(":root"));

  useEffect(() => {
    const html = root.current;
    if (html) {
      html.setAttribute("data-no-transition", "");
      html.setAttribute("data-theme", theme);
      // remove transition after layout update
      requestAnimationFrame(() => {
        html.removeAttribute("data-no-transition");
      });
    }

    ConfigProvider.config({
      theme: {
        primaryColor: themeObject[theme].primary,
        infoColor: themeObject[theme].primary,
        successColor: themeObject[theme].success,
        errorColor: themeObject[theme].error,
        warningColor: themeObject[theme].warning,
      }
    });
  }, [theme]);
};
