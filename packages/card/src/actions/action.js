/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/core/lib/wrapper';
import {PropWrapper} from '@react-mdc/core';
import {Button} from '@react-mdc/button';

import {
  BASE_CLASS_NAME
} from '../constants';

// Button with compact as default
function CompactButton (props: *): React.Element<*> {
  return <Button compact {...props} />;
}

export const CLASS_NAME = `${BASE_CLASS_NAME}__action`;

export type Props<P: {}> = WrapperProps<P> & {
};

/**
 * Actions section action component
 */
export default class Action<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <CompactButton />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className,
      ...props
    } = this.props;

    className = classNames(
      CLASS_NAME,
      className
    );

    return {
      ...props,
      className
    };
  }
}
