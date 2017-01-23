/* @flow */
import React from 'react';
import classNames from 'classnames';
import '@material/typography/dist/mdc.typography.css';

import type {ReactComponent} from '../types';
import {WRAPPER_CLASS} from './constants';

export type Props = {
  component: ReactComponent,
  className?: string,
  [string]: any
};

/**
 * Wrapper component of mdc-typography
 */
export default class Typography extends React.Component {
  props: Props;

  static defaultProps = {
    component: 'div'
  };

  render (): React.Element<*> {
    let {component, className, ...props} = this.props;
    // Inject wrapper class to props
    props = {
      ...props,
      className: classNames(WRAPPER_CLASS, className)
    };
    return React.createElement(component, props);
  }
}
