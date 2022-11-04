import * as React from "react";

import defaultLocaleData from "./en_EN";
import LocaleContext from "./Context";

import type { LocaleReceiverProps } from "../../types";

export const LocalReceiver = ({
  componentName = "global",
  defaultLocale,
  children,
}: LocaleReceiverProps) => {
  const localeContext = React.useContext(LocaleContext);

  const getLocale = () => {
    const locale =
      defaultLocale || defaultLocaleData[componentName ?? "global"];
    const localeFromContext =
      componentName && localeContext ? localeContext[componentName] : {};

    return {
      ...(locale instanceof Function ? locale() : locale),
      ...(localeFromContext || {}),
    };
  };

  const getLocaleCode = () => {
    const localeCode = localeContext && localeContext.locale;
    // Had use LocaleProvide but didn't set locale
    if (localeContext && localeContext.exist && !localeCode) {
      return defaultLocaleData.locale;
    }
    return localeCode;
  };

  return children(getLocale(), getLocaleCode(), localeContext);
};
