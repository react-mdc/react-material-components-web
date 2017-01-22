/* @flow */
import React from 'react';
import classNames from 'classnames';
import '@material/elevation/dist/mdc.elevation.css';

import type {ReactComponent} from '../types';
import type {ZSpace} from './types';
import {classNameForZSpace} from './helpers';
import {TRANSITION_CLASS} from './constants';

export type Props = {
  zSpace: ZSpace,
  transition?: boolean,
  component?: ReactComponent,
  className?: string,
  [string]: any
};

/**
 * Text component decorated by mdc-typography
 */
export class Elevation extends React.Component {
  props: Props

  static defaultProps = {
    transition: false,
    component: 'p'
  }

  render (): React.Element<*> {
    let {
      zSpace,
      transition,
      component,
      className,
      ...props
    } = this.props;
    className = classNames(
      classNameForZSpace(zSpace),
      {
        [TRANSITION_CLASS]: transition
      },
      className
    );
    props = {
      ...props,
      className
    };
    return React.createElement(component, props);
  }
}

export default Elevation;
