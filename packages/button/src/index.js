/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
  PREFIX: CLASS_NAME,
  DENSE: `${CLASS_NAME}--dense`,
  RAISED: `${CLASS_NAME}--raised`,
  COMPACT: `${CLASS_NAME}--compact`,
  PRIMARY: `${CLASS_NAME}--primary`,
  ACCENT: `${CLASS_NAME}--accent`
};

export type Props<P: {}> = WrapperProps<P> & {
  dense: boolean,
  raised: boolean,
  compact: boolean,
  primary: boolean,
  accent: boolean
};

/**
 * Button component
 */
export class Button<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    dense: false,
    raised: false,
    compact: false,
    primary: false,
    accent: false,
    wrap: <button />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      dense,
      raised,
      compact,
      primary,
      accent,
      className,
      ...props
    } = this.props;
    className = classNames(
      CLASS_NAME,
      {
        [propertyClassNames.DENSE]: dense,
        [propertyClassNames.RAISED]: raised,
        [propertyClassNames.COMPACT]: compact,
        [propertyClassNames.PRIMARY]: primary,
        [propertyClassNames.ACCENT]: accent
      },
      className
    );
    return {
      ...props,
      className
    };
  }
}

export default Button;
