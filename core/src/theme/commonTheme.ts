const breakpoints = {
  xs: "650px",
  sm: "960px",
  md: "1280px",
  lg: "1400px",
  xl: "1920px",
};

export const commonTheme = {
  prefix: "poke",
  theme: {
    colors: {
      successBg: "#EEFADC",
      errorBg: "#FFF1E7",
      warningBg: "#FFF4D5",
    },
    space: {
      none: "0rem",
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "2.25rem",
      0: "0rem",
      1: "0.125rem",
      2: "0.25rem",
      3: "0.375rem",
      4: "0.5rem",
      5: "0.625rem",
      6: "0.75rem",
      7: "0.875rem",
      8: "1rem",
      9: "1.25rem",
      10: "1.5rem",
      11: "1.75rem",
      12: "2rem",
      13: "2.25rem",
      14: "2.5rem",
      15: "2.75rem",
      16: "3rem",
      17: "3.5rem",
      18: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    fontSizes: {
      tiny: ".75rem",
      xs: "0.875rem",
      base: "1rem",
      sm: "1.25rem",
      md: "1.5rem",
      lg: "2.25rem",
      xl: "3rem",
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    lineHeights: {
      xs: 1,
      sm: 1.25,
      md: 1.5,
      lg: 1.625,
      xl: 1.75,
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    sizes: {},
    borderWidths: {
      light: "1px",
      normal: "2px",
      bold: "3px",
      extrabold: "4px",
      black: "5px",
    },
    borderStyles: {
      solid: "solid",
      dashed: "dashed",
    },
    radii: {
      xs: "7px",
      sm: "9px",
      md: "12px",
      base: "14px",
      lg: "14px",
      xl: "18px",
      squared: "2px",
      rounded: "8px",
      pill: "9999px",
    },
    shadows: {},
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      5: "500",
      10: "1000",
      max: "9999",
    },
    transitions: {
      default: "all 250ms ease",
    },
  },
  media: {
    xs: `(min-width: ${breakpoints.xs})`,
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
    xl: `(min-width: ${breakpoints.xl})`,
    xsMax: `(max-width: ${breakpoints.xs})`,
    smMax: `(max-width: ${breakpoints.sm})`,
    mdMax: `(max-width: ${breakpoints.md})`,
    lgMax: `(max-width: ${breakpoints.lg})`,
    xlMax: `(max-width: ${breakpoints.xl})`,
  },
};
