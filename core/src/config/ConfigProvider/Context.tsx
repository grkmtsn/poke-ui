import * as React from "react";

import type { ConfigConsumerProps } from "../../types";

export const ConfigContext = React.createContext<ConfigConsumerProps>({});

export const ConfigConsumer = ConfigContext.Consumer;
