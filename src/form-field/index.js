/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import {BASE_CLASS_NAME} from './constants';

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
  ALIGN_END: `${CLASS_NAME}--align-end`
};

export type Props<P: {}> = WrapperProps<P> & {
  alignEnd: boolean
};

/**
 * Form field component
 */
export class FormField<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    alignEnd: false,
    wrap: <div />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      alignEnd,
      className,
      ...props
    } = this.props;
    className = classNames(
      CLASS_NAME,
      {
        [propertyClassNames.ALIGN_END]: alignEnd
      },
      className
    );
    return {
      ...props,
      className
    };
  }
}

export default FormField;
