import { createRoot } from "react-dom/client";
import './i18n';
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "stores/store";
import UserBroadcastChannel from "./UserBroadcastChannel";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={store}>
      <UserBroadcastChannel />
      <App />
    </Provider>
  // </StrictMode>
);
