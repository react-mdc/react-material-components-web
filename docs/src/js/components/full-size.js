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
      <div {...this.props} className={classNames(this.props.className, styles.fullsize)} />
    );
  }
}

export class CenterFullSize extends React.Component {
  props: {
    className?: string
  }
  render (): React.Element<*> {
    return (
      <div {...this.props} className={classNames(this.props.className, styles.fullsize, styles.center)} />
    );
  }
}

export default FullSize;
