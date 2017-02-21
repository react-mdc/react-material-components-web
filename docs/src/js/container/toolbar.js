/* @flow */
import React from 'react';
import classNames from 'classnames';

import {Elevation} from '@react-mdc/elevation';
import {Themed} from '@react-mdc/theme';

import {MaterialIcon} from 'app/js/components/icon';

import styles from './styles.css';

type Props = {
  className?: string,
  onMenuButtonClick: () => void
};

export default class Toolbar extends React.Component {
  props: Props

  static defaultProps = {
    onMenuButtonClick: () => {}
  }
  render (): React.Element<*> {
    return (
      <Elevation
        className={classNames(styles.toolbar, this.props.className)}
        wrap={Themed}
        zSpace={4}
        backgroundColor="primary"
        textColor="primary"
        onColor="primary">
        <MaterialIcon
          className={styles['menu-button']}
          onClick={this.props.onMenuButtonClick}>
          menu
        </MaterialIcon>
      </Elevation>
    );
  }
}
