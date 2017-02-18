/* @flow */
import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

export function Pen (props: *): React.Element<*> {
  return (
    <MaterialIcon {...props}>edit</MaterialIcon>
  );
}

export function MaterialIcon (props: *): * {
  let {
    wrap,
    className,
    ...other
  } = props;
  wrap = wrap || 'i';
  className = classNames(
    styles.icon,
    className
  );
  return React.createElement(wrap, {
    className,
    ...other
  });
}
