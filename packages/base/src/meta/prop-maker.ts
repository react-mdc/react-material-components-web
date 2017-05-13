import {
    NativeDOMProps,
} from "./base";

/**
 * Make child properties from props & state
 */
export interface IPropMaker<ChildProps, Props, State> {
    makeProps(childProps: ChildProps, props: Props, state: State): ChildProps;
    makeNativeDOMProps(childProps: ChildProps, props: Props, state: State): NativeDOMProps;
}
