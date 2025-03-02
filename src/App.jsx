import React from "react";
import { ConfigProvider } from "antd";
import enUS from "antd/lib/locale/en_US";
import GlobalStyle from "./styles/GlobalStyle";
import "typeface-montserrat";
import "typeface-lato";
import { AppRouter } from "./components/router/AppRouter";
import { themeObject } from './styles/themes/themeVariables';
import { useThemeWatcher } from "hooks/useThemeWatcher";

const App = () => {
  useThemeWatcher();

  return (
    <>
      <meta name="theme-color" content={themeObject['light'].primary} />
      <GlobalStyle />
      <ConfigProvider locale={enUS}>
        <AppRouter />
      </ConfigProvider>
    </>
  );
};

export default App;
