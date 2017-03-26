import * as React from "react";

import { getCorrectEventName } from "@material/animation/dist/mdc.animation";
import { MDCCheckboxFoundation } from "@material/checkbox/dist/mdc.checkbox";

import {
    Map,
    OrderedSet,
    Set,
} from "immutable";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";
import NativeDOMAdapter from "@react-mdc/base/lib/native-dom-adapter";

import { ContainerAdapter, FoundationAdapter } from "./adapter";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export type MetaProps = {
    checked?: boolean,
    disabled?: boolean,
    indeterminate?: boolean,
};

export type ChildProps = {
    className?: string,
};

export type State = {
    foundationClasses: Set<string>,
    foundationEventListeners: Map<string, Set<EventListener>>,
};

export type ChildContext = {
    adapter: FoundationAdapter,
};

/**
 * Checkbox input container component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, State> {
    public static childContextTypes = {
        adapter: React.PropTypes.instanceOf(FoundationAdapter),
    };

    public state: State = {
        foundationClasses: OrderedSet<string>(),
        foundationEventListeners: Map<string, Set<EventListener>>(),
    };

    private adapter: FoundationAdapter;
    private foundation: MDCCheckboxFoundation;

    constructor(props) {
        super(props);
        this.adapter = new FoundationAdapter();
        this.foundation = new MDCCheckboxFoundation(this.adapter.toObject());
    }

    public getChildContext(): ChildContext {
        return {
            adapter: this.adapter,
        };
    }

    // Foundation lifecycle
    public componentDidMount() {
        this.adapter.setContainerAdapter(new ContainerAdapterImpl(this));
        this.foundation.init();
        this.adapter.setDefaultOnChangeHandler(this.handleChange);
        if (this.props.checked != null) {
            this.foundation.setChecked(this.props.checked);
        }
        if (this.props.disabled != null) {
            this.foundation.setDisabled(this.props.disabled);
        }
    }

    public componentWillUnmount() {
        this.foundation.destroy();
        this.adapter.setContainerAdapter(new ContainerAdapter());
    }

    // Sync props and internal state
    public componentWillReceiveProps(props: MetaProps) {
        this.syncFoundation(props);
    }

    public render() {
        return (
            <NativeDOMAdapter
                eventListeners={this.state.foundationEventListeners.toJS()}>
                {super.render()}
            </NativeDOMAdapter>
        );
    }

    protected renderProps() {
        const className = this.getClassName(this.props, this.state);
        return {
            className,
        };
    }

    private getClassName(props: MetaProps, state: State): string {
        return classNames(
            CLASS_NAME,
            state.foundationClasses.toJS(),
        );
    }

    private syncFoundation(props: MetaProps) {
        if (props.checked != null && this.foundation.isChecked() !== props.checked) {
            this.foundation.setChecked(props.checked);
        }
        if (props.disabled != null && this.foundation.isDisabled() !== props.disabled) {
            this.foundation.setDisabled(props.disabled);
        }
        if (props.indeterminate != null && this.foundation.isIndeterminate() !== props.indeterminate) {
            this.foundation.setIndeterminate(props.indeterminate);
        }
    }

    // Event handler
    private handleChange: React.ChangeEventHandler<any> = (_evt: React.ChangeEvent<any>) => {
        if (this.props.checked != null) {
            if (this.foundation.isChecked() !== this.props.checked) {
                // Checked state should not be changed by foundation
                this.foundation.setChecked(this.props.checked);
            }
        }
    }
}

class ContainerAdapterImpl extends ContainerAdapter {
    private element: Meta;

    constructor(element: Meta) {
        super();
        this.element = element;
    }
    public addClass(className: string) {
        this.element.setState((state) => ({
            foundationClasses: state.foundationClasses.add(className),
        }));
    }
    public removeClass(className: string) {
        this.element.setState((state) => ({
            foundationClasses: state.foundationClasses.remove(className),
        }));
    }
    public registerAnimationEndHandler(handler: EventListener) {
        this.element.setState((state) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                getCorrectEventName(window, "animationend"),
                OrderedSet<EventListener>(),
                (x) => x.add(handler),
            ),
        }));
    }
    public deregisterAnimationEndHandler(handler: EventListener) {
        const evt = getCorrectEventName(window, "animationend");
        if (this.element.state.foundationEventListeners.get(evt).includes(handler)) {
            this.element.setState((state) => ({
                foundationEventListeners: state.foundationEventListeners.delete(evt),
            }));
        }
    }
    public forceLayout() {
        /* no-op */
    }
    public isAttachedToDOM(): boolean {
        // Always true. Because we initialize foundation on componentDidMount
        return true;
    }
    public isChecked(): boolean | null {
        return this.element.props.checked || null;
    }
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLDivElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLDivElement>, ChildProps, MetaProps>(
        "div", Meta, [],
    );

export default component;
