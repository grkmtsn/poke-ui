import { forwardRef } from "react";
import { LocalReceiver } from "../../config/LocaleProvider/LocalReceiver";
import {
  DefaultProps,
  Locale,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../types";

export interface SharedLoaderProps extends DefaultProps {
  text?: React.ReactNode;
}

export type LoaderProps<C> = PolymorphicComponentProps<C, SharedLoaderProps>;

type LoaderComponent = (<C = "div">(
  props: LoaderProps<C>
) => React.ReactElement) & {
  displayName?: string;
};

const Loader: LoaderComponent = forwardRef(
  (props: LoaderProps<"div">, ref: PolymorphicRef<"div">) => {
    const { text } = props;
    return (
      <LocalReceiver>
        {(locale: Locale["global"]) => (
          <div {...props} ref={ref}>
            {text || locale.loading}
          </div>
        )}
      </LocalReceiver>
    );
  }
) as any;

Loader.displayName = "@poke-ui/core/Loader";

export default Loader;
