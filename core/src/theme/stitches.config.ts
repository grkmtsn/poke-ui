import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

import { commonTheme } from "./commonTheme";
import { grassThemeTokens } from "./themes/grass";
import { fireThemeTokens } from "./themes/fire";

import merge from "../utils/merge";
import { Theme } from "../types";

const stitches = createStitches({
  ...commonTheme,
  theme: {
    ...commonTheme.theme,
    ...grassThemeTokens,
  },
});

export const createThemeBase = stitches.createTheme;
export const { styled, css, globalCss, keyframes, getCssText, theme, config } =
  stitches;

export const createTheme = ({ type, customTheme = {}, className }: Theme) => {
  if (!type) {
    throw new Error("Theme type is required");
  }
  const targetTheme = {
    grass: {
      ...grassThemeTokens,
    },
    fire: {
      ...fireThemeTokens,
    },
  };

  return createThemeBase(
    className || `${type}-theme`,
    merge(targetTheme[type], customTheme)
  );
};

export type VariantProps<T> = Stitches.VariantProps<T>;
export type CSS = Stitches.CSS<typeof config>;
export type StitchesTheme = typeof theme;
