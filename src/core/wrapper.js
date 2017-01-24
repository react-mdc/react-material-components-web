/* @flow */
import React from 'react';

import type {Wrappable, ReactComponent} from './types';

export class Wrapper<T, P: {}, S> extends React.Component<T, P, S> {
  static defaultProps: T

  props: P

  state: S

  renderProps (): P {
    throw new Error('Not implemented');
  }

  renderWrap (): Wrappable<$Shape<P>> {
    throw new Error('Not implemented');
  }

  render (): React.Element<P> {
    let wrap = this.renderWrap();
    let props = this.renderProps();

    if (React.isValidElement(wrap)) {
      // Force type cast
      wrap = ((wrap: any): React.Element<P>);
      return React.cloneElement(wrap, props);
    } else {
      // Force type cast
      wrap = ((wrap: any): ReactComponent<P>);
      return React.createElement(wrap, props);
    }
  }
}

export type Props<P: {}> = {
  wrap: Wrappable<P>
} & P;

export type DefaultProps<T> = {
  wrap: Wrappable<T>
} & T;

export class PropWrapper<T, P: {}, S> extends Wrapper<DefaultProps<T>, Props<P>, S> {
  static defaultProps: DefaultProps<T>
  props: Props<P>

  renderWrap (): Wrappable<P> {
    return this.props.wrap;
  }
}
