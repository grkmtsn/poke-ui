import * as React from "react";
import LocaleProvider from "../LocaleProvider";
import { LocalReceiver } from "../LocaleProvider/LocalReceiver";

import type {
  ConfigConsumerProps,
  ConfigProviderProps,
  Locale,
  ProviderChildrenProps,
} from "../../types";
import { ConfigConsumer, ConfigContext } from "./Context";
import ThemeProvider from "../ThemeProvider/ThemeProvider";

const ProviderChildren: React.FC<ProviderChildrenProps> = ({
  defaultTheme,
  locale,
  legacyLocale,
  parentContext,
  children,
}) => {
  const config = {
    ...parentContext,
    defaultTheme,
    locale: locale || legacyLocale,
  };

  const memoedConfig = React.useMemo(() => config, [locale, defaultTheme]);

  let childNode = children;

  if (locale) {
    childNode = <LocaleProvider locale={locale}>{childNode}</LocaleProvider>;
  }

  childNode = (
    <ThemeProvider defaultTheme={defaultTheme}>{childNode}</ThemeProvider>
  );

  return (
    <ConfigContext.Provider value={memoedConfig}>
      {childNode}
    </ConfigContext.Provider>
  );
};

const ConfigProvider: React.FC<ConfigProviderProps> & {
  ConfigContext: typeof ConfigContext;
} = (props) => {
  return (
    <LocalReceiver>
      {(_locale, _localCode, legacyLocale) => (
        <ConfigConsumer>
          {(context) => (
            <ProviderChildren
              parentContext={context}
              legacyLocale={legacyLocale as Locale}
              {...props}
            />
          )}
        </ConfigConsumer>
      )}
    </LocalReceiver>
  );
};

ConfigProvider.ConfigContext = ConfigContext;

export const useConfigContext = (): ConfigConsumerProps => {
  return React.useContext(ConfigContext);
};

export default ConfigProvider;
