import * as React from "react";

import * as classNames from "classnames";
import { OrderedSet, Set } from "immutable";

import { MDCRadioFoundation } from "@material/radio/dist/mdc.radio";
import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import { ContainerAdapter, FoundationAdapter } from "./adapter";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export type ChildProps = {
    className?: string,
};

export type MetaProps = {
    checked?: boolean,
    disabled?: boolean,
};

export type State = {
    foundationClasses: Set<string>,
};

export type ChildContext = {
    adapter: FoundationAdapter<ChildProps>,
};

/**
 * Radio input container component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, State> {
    public static childContextTypes = {
        adapter: React.PropTypes.instanceOf(FoundationAdapter),
    };

    public state: State = {
        foundationClasses: OrderedSet<string>(),
    };

    private adapter: FoundationAdapter<ChildProps>;
    private foundation: MDCRadioFoundation;

    constructor(props) {
        super(props);
        this.adapter = new FoundationAdapter();
        this.foundation = new MDCRadioFoundation(this.adapter.toObject());
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
    public componentWillReceiveProps(props) {
        this.syncFoundation(props);
    }

    protected renderProps(childProps: ChildProps) {
        let {
      checked: _checked,
            disabled: _disabled,
    } = this.props;

        const className = classNames(
            CLASS_NAME,
            childProps.className,
            this.state.foundationClasses.toJS(),
        );
        return {
            ...childProps,
            className,
        };
    }

    private syncFoundation(props: MetaProps) {
        if (props.checked != null && this.foundation.isChecked() !== props.checked) {
            this.foundation.setChecked(props.checked);
        }
        if (props.disabled != null && this.foundation.isDisabled() !== props.disabled) {
            this.foundation.setDisabled(props.disabled);
        }
    }

    // Event handler
    private handleChange = (_evt: React.ChangeEvent<ChildProps>) => {
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
            foundationClasses: state.foundationClasses.remove(className),
        }));
    }
    public removeClass(className: string) {
        this.element.setState((state) => ({
            foundationClasses: state.foundationClasses.add(className),
        }));
    }
    public isChecked(): boolean | null {
        return this.element.props.checked || null;
    }
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLDivElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLDivElement>, ChildProps, MetaProps>(
        "div", Meta, ["checked", "disabled"],
    );

export default component;
