/* @flow */
import React from 'react';
import classNames from 'classnames';

import {
  Toolbar,
  Section
} from '@react-mdc/toolbar';

import {MaterialIcon} from 'app/js/components/icon';

import styles from './styles.css';

type Props = {
  className?: string,
  onMenuButtonClick: () => void
};

export default class MainToolbar extends React.Component {
  props: Props

  static defaultProps = {
    onMenuButtonClick: () => {}
  }
  render (): React.Element<*> {
    return (
      <Toolbar className={classNames(this.props.className, styles.toolbar)} fixed>
        <Section align="start">
          <MaterialIcon
            className={styles['menu-button']}
            onClick={this.props.onMenuButtonClick}>
            menu
          </MaterialIcon>
        </Section>
      </Toolbar>
    );
  }
}
