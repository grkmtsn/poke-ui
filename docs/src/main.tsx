import * as React from "react";
import ReactDOM from "react-dom/client";
import { Button, ConfigProvider, tr_TR } from "@poke-ui/core";

import App from "./App";

const AppProviders = () => {
  const [locale, setLocale] = React.useState<any>();

  const handleChangeLocale = () => {
    if (locale) {
      setLocale(undefined);
    } else {
      setLocale(tr_TR);
    }
  };

  return (
    <ConfigProvider locale={locale}>
      <Button onClick={handleChangeLocale}>Change UI Locale</Button>
      <App />
    </ConfigProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders />
  </React.StrictMode>
);
