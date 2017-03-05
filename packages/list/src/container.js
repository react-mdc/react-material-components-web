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
  DENSE: `${CLASS_NAME}--dense`,
  TWO_LINE: `${CLASS_NAME}--two-line`,
  AVARTAR_LIST: `${CLASS_NAME}--avartar-list`
};

export type Props<P: {}> = WrapperProps<P> & {
  dense: boolean,
  twoLine: boolean,
  avartarList: boolean
};

/**
 * List container component
 */
export default class List<P: any> extends PropWrapper<P, *, Props<P>, *> {
  props: Props<P>

  static defaultProps = {
    dense: false,
    twoLine: false,
    avartarList: false,
    wrap: <ul />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      dense,
      twoLine,
      avartarList,
      className,
      ...props
    } = this.props;

    className = classNames(
      CLASS_NAME,
      {
        [propertyClassNames.DENSE]: dense,
        [propertyClassNames.TWO_LINE]: twoLine,
        [propertyClassNames.AVARTAR_LIST]: avartarList
      },
      className
    );

    return {
      ...props,
      className
    };
  }
}
