import { commonTheme } from "../theme/commonTheme";
import { theme } from "../theme/stitches.config";

export type TokenKeyName = keyof typeof theme;

export const getTokenValue = (token: TokenKeyName, tokenName: string) => {
  if (!document || !token) return "";
  const docStyle = getComputedStyle(document.documentElement);
  const pureTokenName = tokenName.split("$")[1];
  const tokenKey = `--${commonTheme.prefix}-${String(token)}-${pureTokenName}`;
  const tokenValue = docStyle.getPropertyValue(tokenKey);

  if (tokenValue && tokenValue.includes("var")) {
    getTokenValue(token, tokenValue);
  }

  return tokenValue;
};
