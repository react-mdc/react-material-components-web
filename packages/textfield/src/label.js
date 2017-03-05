/* @flow */
import React from 'react';
import classNames from 'classnames';
import {
  Set,
  OrderedSet
} from 'immutable';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import {BASE_CLASS_NAME} from './constants';
import {FoundationAdapter, LabelAdapter} from './adapter';

export const CLASS_NAME = `${BASE_CLASS_NAME}__label`;

export const propertyClassNames = {
  PREFIX: CLASS_NAME
};

export type Props<P: {}> = WrapperProps<P> & {
};

type State = {
  foundationClasses: Set<string>
};

type Context = {
  adapter: FoundationAdapter
};

/**
 * Textfield label component
 */
export default class Label<P: any> extends PropWrapper<P, *, Props<P>, *> {
  props: Props<P>

  context: Context

  state: State

  static contextTypes = {
    adapter: React.PropTypes.instanceOf(FoundationAdapter).isRequired
  }

  static defaultProps = {
    wrap: <label />
  }

  state = {
    foundationClasses: new OrderedSet()
  }

  getClassName (props: Props<P>, state: State): string {
    let {
      className
    } = props;
    return classNames(
      CLASS_NAME,
      className,
      state.foundationClasses.toJS()
    );
  }

  componentDidMount () {
    this.context.adapter.setLabelAdapter(new LabelAdapterImpl(this));
  }

  componentWillUnmount () {
    this.context.adapter.setLabelAdapter(new LabelAdapter());
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className: _className,
      ...props
    } = this.props;

    let className = this.getClassName(this.props, this.state);
    return {
      ...props,
      className
    };
  }
}

class LabelAdapterImpl extends LabelAdapter {
  element: Label<*>

  constructor (element: Label<*>) {
    super();
    this.element = element;
  }

  addClassToLabel (className: string) {
    this.element.setState((state) => ({
      foundationClasses: state.foundationClasses.add(className)
    }));
  }
  removeClassFromLabel (className: string) {
    this.element.setState((state) => ({
      foundationClasses: state.foundationClasses.remove(className)
    }));
  }
}
