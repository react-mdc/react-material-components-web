/* @flow */
import React from 'react';

import {Elevation} from '@react-mdc/elevation';
import {Themed} from '@react-mdc/theme';

import {MaterialIcon} from 'app/js/components/icon';

import styles from './styles.css';

type Props = {
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
        className={styles.toolbar}
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
