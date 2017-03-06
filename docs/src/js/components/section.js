/* @flow */
import React from 'react';
import classNames from 'classnames';

import {Elevation} from '@react-mdc/elevation';
import {Typography, Title, Subheading2} from '@react-mdc/typography';
import {
  Grid,
  Cell
} from '@react-mdc/layout-grid';

import type {Children} from 'app/js/common/types';
import styles from './styles.css';

/**
 * Section divider for each section
 */
export class Section extends React.Component {
  props: {
    title?: string,
    className?: string,
    children?: Children
  }

  render (): React.Element<*> {
    const {
      title,
      className,
      children,
      ...props
    } = this.props;
    let titleEl = null;
    if (title != null) {
      titleEl = (
        <Typography wrap={Cell} span={12} {...props}>
          <Title>
            {title}
          </Title>
        </Typography>
      );
    }
    return (
      <Grid className={classNames(styles.section, className)} {...props}>
        {titleEl}
        {children}
      </Grid>
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
      <Typography wrap={Cell} span={12} {...props}>
        <Title>
          {children}
        </Title>
      </Typography>
    );
  }
}

type SectionPanelProps = {
  title: string,
  children?: Children
};

/**
 * Section panel
 */
export function SectionPanel (props: SectionPanelProps): React.Element<*> {
  const {
    title,
    children,
    ...p
  } = props;
  return (
    <Typography wrap={Cell} {...p}>
      <Subheading2>
        {title}
      </Subheading2>
      {children}
    </Typography>
  );
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
      <Typography wrap={Cell} span={12} {...props}>
        <Subheading2>
          {children}
        </Subheading2>
      </Typography>
    );
  }
}

/**
 * Demo
 */
export class Demo extends React.Component {
  props: {
    children?: Array<React.Element<*>> | React.Element<*>
  }

  render (): React.Element<*> {
    let {
      children,
      ...props
    } = this.props;
    return (
      <Elevation
        className={styles.demo}
        zSpace={4}
        wrap={<Cell wrap={Typography} />}
        span={12}
        {...props}>
        <Typography className={styles['demo-title']}>
          <SectionSubtitle>
            Demo
          </SectionSubtitle>
        </Typography>
        <Elevation wrap={<div />} zSpace={4}>
          <div className={styles['demo-content']}>
            {children}
          </div>
        </Elevation>
      </Elevation>
    );
  }
}
