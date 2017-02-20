/* @flow */
import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

export class FullSize extends React.Component {
  props: {
    className?: string
  }
  render (): React.Element<*> {
    return (
      <div {...this.props} className={classNames(styles.fullsize, this.props.className)} />
    );
  }
}

export class CenterFullSize extends React.Component {
  props: {
    className?: string
  }
  render (): React.Element<*> {
    return (
      <div {...this.props} className={classNames(styles.fullsize, styles.center, this.props.className)} />
    );
  }
}

export default FullSize;
