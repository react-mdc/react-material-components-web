/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}-divider`;

export const propertyClassNames = {
  INSET: `${CLASS_NAME}--inset`
};

export type Props<P: {}> = WrapperProps<P> & {
  inset: boolean
};

// li with role="separator" as default
function SeparatorLi (props: *): React.Element<*> {
  return <li role="separator" {...props} />;
}

/**
 * List divider component
 */
export default class Divider<P: any> extends PropWrapper<P, *, Props<P>, *> {
  props: Props<P>

  static defaultProps = {
    inset: false,
    wrap: <SeparatorLi />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      inset,
      className,
      ...props
    } = this.props;

    className = classNames(
      CLASS_NAME,
      {
        [propertyClassNames.INSET]: inset
      },
      className
    );

    return {
      ...props,
      className
    };
  }
}
