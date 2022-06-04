import * as React from "react";
import LocaleContext from "./Context";

import type { LocaleProviderProps } from "../../types";

const LocaleProvider = ({ locale, children }: LocaleProviderProps) => {
  const value = React.useMemo(
    () => ({
      ...locale,
      exist: true,
    }),
    [locale]
  );
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export default LocaleProvider;
