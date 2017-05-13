import {
    default as Meta,
    NativeDOMProps,
} from "./base";

/**
 * Make child properties from props & state
 */
export interface IPropMaker<ChildProps, Props, State> {
    makeProps(childProps: ChildProps, props: Props, state: State): ChildProps;
    makeNativeDOMProps(childProps: ChildProps, props: Props, state: State): NativeDOMProps;
}

/**
 * Abstract meta component with prop maker.
 */
export abstract class PropMakerMetaComponent<ChildProps, Props, State> extends Meta<ChildProps, Props, State> {
    /**
     * Simple meta factory that has no extra implementations
     */
    public static simple<ChildProps, Props>(
        propMaker: IPropMaker<ChildProps, Props, {}>, displayName: string): React.ComponentClass<Props> {
        class SimpleMeta extends PropMakerMetaComponent<ChildProps, Props, {}> {
            public static displayName = displayName;
            public propMaker = propMaker;
        }
        return SimpleMeta;
    }

    protected abstract propMaker: IPropMaker<ChildProps, Props, State>;

    protected renderProps(childProps: ChildProps): ChildProps {
        return this.propMaker.makeProps(childProps, this.getMetaProps(), this.state);
    }

    protected getNativeDOMProps(childProps: ChildProps): NativeDOMProps {
        return this.propMaker.makeNativeDOMProps(childProps, this.getMetaProps(), this.state);
    }

    private getMetaProps(): Props {
        // Typecheck always fails on following lines. So we use casting with any
        const {
            children,
            ...rest,
        } = this.props as any;
        return rest;
    }
}
