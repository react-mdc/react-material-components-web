/* @flow */
import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

export default class PageContainer extends React.Component {
  props: {
    className?: string
  }
  render (): React.Element<*> {
    let {
      className,
      ...props
    } = this.props;
    className = classNames(this.props.className, styles['page-container']);

    return (
      <div className={className} {...props} />
    );
  }
}
