import React, { CSSProperties } from "react";
import { CSS } from "../theme/stitches.config";

// Component Types
type ExtendedProps<_ExtendedProps = {}, OverrideProps = {}> = OverrideProps &
  Omit<_ExtendedProps, keyof OverrideProps>;

type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

type InheritedProps<C extends React.ElementType, Props = {}> = ExtendedProps<
  PropsOf<C>,
  Props
>;

type ComponentProp<C extends React.ElementType> = {
  component?: C;
};

export type PolymorphicRef<C> = C extends React.ElementType
  ? React.ComponentPropsWithRef<C>["ref"]
  : never;

export type PolymorphicComponentProps<
  C,
  Props = {}
> = C extends React.ElementType
  ? InheritedProps<C, Props & ComponentProp<C>> & { ref?: PolymorphicRef<C> }
  : Props & { component: React.ElementType };

export interface DefaultProps<T extends string = never> {
  className?: string;
  style?: CSSProperties;
  css?: CSS;
}

// Theme and Styling Types
declare namespace ConfigType {
  export type Theme<T = {}> = {
    fonts?: { [token in number | string]: boolean | number | string };
    fontSizes?: { [token in number | string]: boolean | number | string };
    fontWeights?: { [token in number | string]: boolean | number | string };
    lineHeights?: { [token in number | string]: boolean | number | string };
    letterSpacings?: { [token in number | string]: boolean | number | string };
    space?: { [token in number | string]: boolean | number | string };
    radii?: { [token in number | string]: boolean | number | string };
    zIndices?: { [token in number | string]: boolean | number | string };
    borderWeights?: { [token in number | string]: boolean | number | string };
    colors?: { [token in number | string]: boolean | number | string };
    shadows?: { [token in number | string]: boolean | number | string };
    transitions?: { [token in number | string]: boolean | number | string };
    breakpoints?: { [token in number | string]: boolean | number | string };
  } & {
    [Scale in keyof T]: {
      [Token in keyof T[Scale]]: T[Scale][Token] extends
        | boolean
        | number
        | string
        ? T[Scale][Token]
        : boolean | number | string;
    };
  };
}

export type ThemeType = "fire" | "grass";
export type BaseTheme = ConfigType.Theme;

export type Theme = {
  type?: ThemeType;
  className?: string;
  customTheme?: BaseTheme;
};

// Locale Types
export type Locale = {
  locale: string;
  global: {
    loading: string;
  };
};

export type LocaleContextProps = Partial<Locale> & { exist?: boolean };

export type LocaleProviderProps = {
  locale: Locale;
  children?: React.ReactNode;
};

export type LocaleComponentName = Exclude<keyof Locale, "locale">;

export interface LocaleReceiverProps<
  C extends LocaleComponentName = LocaleComponentName
> {
  componentName?: C;
  defaultLocale?: Locale[C] | (() => Locale[C]);
  children: (
    locale: Locale[C],
    localeCode?: string,
    fullLocale?: object
  ) => JSX.Element;
}

//Config Types
export interface ConfigProviderProps {
  locale?: Locale;
  defaultTheme?: ThemeType;
  children?: React.ReactNode;
}
export interface ConfigConsumerProps {
  locale?: Locale;
  defaultTheme?: ThemeType;
}

export interface ProviderChildrenProps extends ConfigProviderProps {
  parentContext: ConfigConsumerProps;
  legacyLocale: Locale;
}
