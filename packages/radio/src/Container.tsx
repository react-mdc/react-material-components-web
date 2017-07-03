import * as React from "react";

import { OrderedSet, Set } from "immutable";
import * as PropTypes from "prop-types";

import { MDCRadioFoundation } from "@material/radio/dist/mdc.radio";
import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

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
    className?: string,
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
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, State> {
    public static childContextTypes = {
        adapter: PropTypes.instanceOf(FoundationAdapter),
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

    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues() {
        return this.state.foundationClasses.toJS();
    }

    private syncFoundation(props: MetaProps) {
        if (props.checked != null && this.foundation.isChecked() !== this.props.checked) {
            this.foundation.setChecked(props.checked);
        }
        if (props.disabled != null && this.foundation.isDisabled() !== this.props.disabled) {
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

export default class Container extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "className",
            "checked",
            "disabled",
        ];
    }

    protected getChildComponent() {
        return "div";
    }
}
