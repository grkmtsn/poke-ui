import { styled } from "../../../theme/stitches.config";

export const StyledButton = styled("button", {
  border: "none",
  borderRadius: "$xs",
  padding: "$md",

  variants: {
    shape: {
      rounded: {
        borderRadius: "$rounded",
      },
      squared: {
        borderRadius: "$squared",
      },
      pill: {
        borderRadius: "$pill",
      },
    },
    color: {
      default: {
        backgroundColor: "$primaryDark",
        color: "$primaryLighter",
      },
      success: {
        backgroundColor: "$successBg",
        adjustColor: "$successBg",
      },
      error: {
        backgroundColor: "$errorBg",
        adjustColor: "$errorBg",
      },
      warning: {
        backgroundColor: "$warningBg",
        adjustColor: "$warningBg",
      },
    },
  },
});
