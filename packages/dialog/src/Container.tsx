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
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";
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

export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, State> {
    protected renderNativeDOMProps_c, _p, state: State) {
        return {
            attributes: state.foundationAttributes.toJS(),
            eventListeners: state.foundationEventListeners.toJS(),
        };
    }

    public getClassName(props: MetaProps, state: State): string {
        return classNames(
            CLASS_NAME,
            {
                [propertyClassNames.DARK]: this.props.dark,
            },
            state.foundationClasses.toJS(),
        );
    }

    protected renderClassValues(_c, props: MetaProps, state: State) {
        return [this.getClassName(props, state)];
    }
}

/**
 * Dialog component
 */
export class Meta extends PropMakerMetaComponent<ChildProps, MetaProps, State> {
    public static displayName = "Container";

    public static childContextTypes = {
        adapter: PropTypes.instanceOf(FoundationAdapter),
    };

    public state: State = {
        foundationClasses: OrderedSet<string>(),
        foundationAttributes: Map<string, string>(),
        foundationEventListeners: Map<string, Set<EventListener>>(),
        open: false,
    };

    public propMaker = new PropMaker();

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

    /* Public APIs */

    public accept(notifyChange: boolean = false) {
        this.foundation.accept(notifyChange);
    }

    public cancel(notifyChange: boolean = false) {
        this.foundation.cancel(notifyChange);
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
            this.element.propMaker.getClassName(this.element.props, this.element.state).split(/\s+/),
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

export default class Container extends DefaultComponentBase<React.HTMLProps<HTMLElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            ???
        ];
    }

    protected getChildComponent() {
        return
    "aside",
    Meta,
    [
        "dark",
        "open",
        "onAccept",
        "onCancel",
        "onOpen",
        "onClose",
    ],
);
