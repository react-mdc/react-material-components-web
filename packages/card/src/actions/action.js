/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Config} from '@react-mdc/base/lib/types';
import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';
import {Button} from '@react-mdc/button';

import {
  BASE_CLASS_NAME
} from '../constants';

// Button with compact as default
function CompactButton (props: *): React.Element<*> {
  return <Button compact {...props} />;
}

export const CLASS_NAME = `${BASE_CLASS_NAME}__action`;

export type Props<P> = WrapperProps<P> & {
  className: ?string
};

const defaultProps = {
  wrap: CompactButton
};

/**
 * Actions section action component
 */
export default class Action<P: Config> extends PropWrapper<P, typeof defaultProps, Props<P>, *> {
  static defaultProps = defaultProps

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

export function f (): React.Element<*> {
  return (
    <Action wrap={CompactButton} className="asd" />
  );
}
