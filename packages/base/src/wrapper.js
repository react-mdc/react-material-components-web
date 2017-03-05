/* @flow */
import React from 'react';

import type {Config, Wrappable, ReactComponent} from './types';

export class Wrapper<WP: Config, DP, P: Config, S> extends React.Component<DP, P, S> {
  static defaultProps: DP
  props: P
  state: S

  renderProps (): WP {
    throw new Error('Not implemented');
  }

  renderWrap (): Wrappable<WP> {
    throw new Error('Not implemented');
  }

  render (): React.Element<*> {
    let wrap = this.renderWrap();
    let props = this.renderProps();

    if (React.isValidElement(wrap)) {
      // Force type cast
      wrap = ((wrap: any): React.Element<WP>);
      return React.cloneElement(wrap, props);
    } else {
      // Force type cast
      wrap = ((wrap: any): ReactComponent<WP>);
      return React.createElement(wrap, props);
    }
  }
}

export type Props<P: Config> = {
  wrap: Wrappable<P>
} & P;

export type DefaultProps = {
  wrap: Wrappable<Config>
};

export class PropWrapper<WP: Config, D: DefaultProps, P: Props<WP>, S> extends Wrapper<WP, D, P, S> {
  renderWrap (): Wrappable<WP> {
    return this.props.wrap;
  }
}
