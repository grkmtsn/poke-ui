import { forwardRef } from "react";
import {
  DefaultProps,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../types";

import { StyledButton } from "./styles";

export type Colors = "default" | "success" | "error" | "warning";
export type Shapes = "rounded" | "squared" | "pill";

export interface SharedButtonProps extends DefaultProps {
  /** Button Color Theme */
  color?: Colors;

  /** Button Shape */
  shape?: Shapes;

  /** Button Text */
  label?: React.ReactNode;

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
    const { shape = "squared", color = "default", children, label,  ...rest } = props;
    return (
      <StyledButton shape={shape} color={color} ref={ref} {...rest}>
        {children || label}
      </StyledButton>
    );
  }
) as any;

Button.displayName = "@poke-ui/core/Button";

export default Button;
