import { forwardRef } from "react";
import {
  DefaultProps,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../types";

import { StyledButton } from "./styles";

export interface SharedButtonProps extends DefaultProps {
  /** Button label */
  children?: React.ReactNode;
}

export type ButtonProps<C> = PolymorphicComponentProps<C, SharedButtonProps>;

type ButtonComponent = (<C = "button">(
  props: ButtonProps<C>
) => React.ReactElement) & {
  displayName?: string;
};

const Button: ButtonComponent = forwardRef(
  (props: ButtonProps<"button">, ref: PolymorphicRef<"button">) => {
    const { children, ...rest } = props;
    return (
      <StyledButton ref={ref} {...rest}>
        {children}
      </StyledButton>
    );
  }
) as any;

Button.displayName = "@poke-ui/core/Button";

export default Button;
