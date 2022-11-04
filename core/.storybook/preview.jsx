import React from "react";
import ConfigProvider, { useConfigContext } from "../src/config/ConfigProvider";
import { useThemeContext } from "../src/config/ThemeProvider/ThemeProvider";
import tr_TR from "../src/config/LocaleProvider/tr_TR";
import en_EN from "../src/config/LocaleProvider/en_EN";

const locales = {
  "en": en_EN,
  "tr": tr_TR
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const styles = {
  wrapper: {
    "padding": 12,
    "margin-bottom": 12,
    "border-bottom": "1px solid #ccc"
  },
  page: {
    padding: 12,
  }
}

const CustomizeBar = ({ onChangeLocale }) => {
  const { theme, changeTheme } = useThemeContext();
  const { locale } = useConfigContext();

  const handleChangeTheme = e => {
    changeTheme(e.target.value)
  }

  return (
    <div style={styles.wrapper}>
      <div>
        <label>Select Theme: </label>
        <select value={theme} placeholder="Select Theme" onChange={handleChangeTheme}>
          <option value="grass">
            Grass
          </option>
          <option value="fire">
            Fire
          </option>
        </select>
      </div>
      <div>
        <label>Select Locale: </label>
        <select value={locale.locale} placeholder="Select Locale" onChange={e => onChangeLocale(e.target.value)}>
          {Object.keys(locales).map(key => (
            <option value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export const decorators = [
  (Story) => {
    const [locale, setLocale] = React.useState(locales.en);

    const handleChangeLocale = (value) => {
      setLocale(locales[value])
    };

    return (
      <div>
        <ConfigProvider defaultTheme="grass" locale={locale}>
          <CustomizeBar locale={locale.locale} onChangeLocale={handleChangeLocale} />
          <div style={styles.page}>
            <Story />
          </div>
        </ConfigProvider>
      </div>
    )
  },
];
