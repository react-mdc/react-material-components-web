import { Wrappable } from "./types";
import Wrapper from "./wrapper";

/*
 * FIXME
 * Should not ignore type P
 * Currently, we ignore this because of
 * https://github.com/Microsoft/TypeScript/issues/3870
 */
export type Props<P extends {}> = ({
    wrap?: Wrappable<P>,
    [key: string]: any,
} & {});

export type DefaultProps<WP, P extends Props<WP>> = {
    wrap: Wrappable<WP>,
} & Partial<P>;

export default class PropWrapper<WP, P extends Props<WP>, S>
    extends Wrapper<WP, P, S> {
    public static defaultProps: DefaultProps<any, Props<any>>;

    protected renderWrap(): Wrappable<WP> {
        return this.props.wrap as Wrappable<WP>;
    }
}
