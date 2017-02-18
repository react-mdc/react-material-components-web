/* @flow */
import React from 'react';

import {Elevation} from '@react-mdc/elevation';
import {Themed} from '@react-mdc/theme';

import {MaterialIcon} from 'app/js/components/icon';

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
        wrap={Themed}
        zSpace={4}
        style={{
          display: 'flex',
          height: 64,
          flexDirection: 'row',
          alignItems: 'center'
        }}
        backgroundColor="primary"
        textColor="primary"
        onColor="primary">
        <MaterialIcon
          style={{
            padding: 16,
            cursor: 'pointer'
          }}
          onClick={this.props.onMenuButtonClick}>
          menu
        </MaterialIcon>
      </Elevation>
    );
  }
}
