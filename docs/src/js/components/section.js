/* @flow */
import React from 'react';
import classNames from 'classnames';

import {Typography, Title, Subheading2} from '@react-mdc/typography';

import styles from './styles.css';

/**
 * Section divider for each secion
 */
export class Section extends React.Component {
  props: {
    className?: string
  }
  render (): React.Element<*> {
    return (
      <div {...this.props} className={classNames(this.props.className, styles.section)} />
    );
  }
}

/**
 * Section Title
 */
export class SectionTitle extends React.Component {
  props: {
    children?: Array<React.Element<*>> | React.Element<*>
  }
  render (): React.Element<*> {
    let {
      children,
      ...props
    } = this.props;
    return (
      <Typography {...props}>
        <Title adjustMargin>
          {children}
        </Title>
      </Typography>
    );
  }
}

/**
 * Section Subtitle
 */
export class SectionSubtitle extends React.Component {
  props: {
    children?: Array<React.Element<*>> | React.Element<*>
  }
  render (): React.Element<*> {
    let {
      children,
      ...props
    } = this.props;
    return (
      <Typography {...props}>
        <Subheading2>
          {children}
        </Subheading2>
      </Typography>
    );
  }
}
