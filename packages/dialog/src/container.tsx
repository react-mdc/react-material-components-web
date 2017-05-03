import * as React from "react";

import * as classNames from "classnames";
import * as PropTypes from "prop-types";

import { MDCDialogFoundation } from "@material/dialog/dist/mdc.dialog";
import {
    Map,
    OrderedSet,
    Set,
} from "immutable";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";
import { includes } from "@react-mdc/base/lib/util";

import {
    BASE_CLASS_NAME,
} from "./constants";

import { ContainerAdapter, FoundationAdapter } from "./adapter";

const {
    cssClasses: {
        OPEN: OPEN_CLASS_NAME,
    },
} = MDCDialogFoundation;

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
    DARK: `${CLASS_NAME}--theme-dark`,
};

export type MetaProps = {
    dark?: boolean,
    open?: boolean,
    onAccept?: (element: Meta) => void,
    onOpen?: (element: Meta) => void,
    onCancel?: (element: Meta) => void,
    onClose?: (element: Meta) => void,
};

export type ChildProps = {
    className?: string,
};

export type State = {
    foundationClasses: Set<string>,
    foundationEventListeners: Map<string, Set<EventListener>>,
    foundationAttributes: Map<string, string>,
    open: boolean,
};

export type ChildContext = {
    adapter: FoundationAdapter,
};

/**
 * Dialog component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, State> {
    public static childContextTypes = {
        adapter: PropTypes.instanceOf(FoundationAdapter),
    };

    public static defaultProps = {
        dark: false,
        open: false,
    };

    public state: State = {
        foundationClasses: OrderedSet<string>(),
        foundationAttributes: Map<string, string>(),
        foundationEventListeners: Map<string, Set<EventListener>>(),
        open: false,
    };

    private adapter: FoundationAdapter;
    private foundation: MDCDialogFoundation;

    constructor(props) {
        super(props);
        this.adapter = new FoundationAdapter();
        this.foundation = new MDCDialogFoundation(this.adapter.toObject());
    }

    public getChildContext(): ChildContext {
        return {
            adapter: this.adapter,
        };
    }

    // Sync props and internal state
    public componentWillReceiveProps(props: MetaProps) {
        if ((!!props.open) !== (!!this.state.open)) {
            if (props.open) {
                this.foundation.open();
            } else {
                this.foundation.close();
            }
        }
    }

    // Foundation lifecycle
    public componentDidMount() {
        this.adapter.setContainerAdapter(new ContainerAdapterImpl(this));
        this.foundation.init();
    }

    public componentWillUnmount() {
        this.foundation.destroy();
        this.adapter.setContainerAdapter(new ContainerAdapter());
    }

    /**
     * Internal, but public API
     */
    public getClassName(props: MetaProps, state: State): string {
        return classNames(
            CLASS_NAME,
            {
                [propertyClassNames.DARK]: this.props.dark,
            },
            state.foundationClasses.toJS(),
        );
    }

    /* Public APIs */

    public accept(notifyChange: boolean = false) {
        this.foundation.accept(notifyChange);
    }

    public cancel(notifyChange: boolean = false) {
        this.foundation.cancel(notifyChange);
    }

    protected getBaseClassName() {
        return null;
    }

    protected getClassValues() {
        return [this.getClassName(this.props, this.state)];
    }

    protected getNativeDOMProps() {
        return {
            attributes: this.state.foundationAttributes.toJS(),
            eventListeners: this.state.foundationEventListeners.toJS(),
        };
    }
}

class ContainerAdapterImpl extends ContainerAdapter {
    private element: Meta;

    constructor(element: Meta) {
        super();
        this.element = element;
    }

    public hasClass(className: string): boolean {
        return includes(
            this.element.getClassName(this.element.props, this.element.state).split(/\s+/),
            className,
        );
    }
    public addClass(className: string) {
        this.element.setState((state) => ({
            foundationClasses: state.foundationClasses.add(className),
        }));

        // MDCDialog does not provide opening/closing event.
        // But we can assume open/close by adding/removing OPEN_CLASS_NAME
        if (className === OPEN_CLASS_NAME) {
            this.element.setState({
                open: true,
            });
            if (this.element.props.onOpen) {
                this.element.props.onOpen(this.element);
            }
        }
    }
    public removeClass(className: string) {
        this.element.setState((state) => ({
            foundationClasses: state.foundationClasses.remove(className),
        }));

        // MDCDialog does not provide opening/closing event.
        // But we can assume open/close by adding/removing OPEN_CLASS_NAME
        if (className === OPEN_CLASS_NAME) {
            this.element.setState({
                open: false,
            });
            if (this.element.props.onClose) {
                this.element.props.onClose(this.element);
            }
        }
    }
    public setAttr(attr: string, val: string) {
        this.element.setState((state) => ({
            foundationAttributes: state.foundationAttributes.set(attr, val),
        }));
    }
    public registerInteractionHandler(evt: string, handler: EventListener) {
        this.element.setState((state) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                evt,
                OrderedSet<EventListener>(),
                (x) => x.add(handler),
            ),
        }));
    }
    public deregisterInteractionHandler(evt: string, handler: EventListener) {
        this.element.setState((state) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                evt,
                OrderedSet<EventListener>(),
                (x) => x.delete(handler),
            ),
        }));
    }
    public notifyAccept() {
        if (this.element.props.onAccept != null) {
            this.element.props.onAccept(this.element);
        }
    }
    public notifyCancel() {
        if (this.element.props.onCancel != null) {
            this.element.props.onCancel(this.element);
        }
    }
}

export type Props = React.HTMLProps<HTMLElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLElement>, MetaProps, Props>(
    "aside",
    Meta,
    [
        "dark",
        "open",
        "onAccept",
        "onCancel",
        "onOpen",
        "onClose",
    ]) as DefaultComponent<React.HTMLProps<HTMLElement>, MetaProps>;

export default component;
