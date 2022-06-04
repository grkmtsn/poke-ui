import { createContext } from "react";
import type { LocaleContextProps } from "../../types";

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export default LocaleContext;
