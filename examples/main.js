/* @flow */
import React from 'react';
import {Router, Route, IndexRedirect, Link, browserHistory} from 'react-router';

import {
  TemporaryDrawer,
  Drawer,
  Content,
  Header,
  HeaderContent
} from 'react-mdcw/lib/drawer/temporary';
import {Typography} from 'react-mdcw/lib/typography';
import {Themed} from 'react-mdcw/lib/theme';

import TypographyExample from './typography';
import ElevationExample from './elevation';

class Container extends React.Component {
  props: {
    children: Array<Class<React.Component<*, *, *>>>
  }
  state = {
    drawerOpen: false
  }

  handleMenuButtonPress = () => {
    this.setState({
      drawerOpen: true
    });
  }

  handleOpenDrawer = () => {
    this.setState({
      drawerOpen: true
    });
  }

  handleCloseDrawer = () => {
    this.setState({
      drawerOpen: false
    });
  }

  render (): React.Element<*> {
    return (
      <Typography>
        <TemporaryDrawer
          open={this.state.drawerOpen}
          onOpenDrawer={this.handleOpenDrawer}
          onCloseDrawer={this.handleCloseDrawer}>
          <Drawer>
            <Header>
              <HeaderContent
                wrap={Themed}
                textColor="primary"
                onColor="primary"
                backgroundColor="primary">
                Menu
              </HeaderContent>
            </Header>
            <Content>
              <ul>
                <li>
                  <Link to="/typography">
                    Typography
                  </Link>
                </li>
                <li>
                  <Link to="/elevation">
                    Elevation
                  </Link>
                </li>
              </ul>
            </Content>
          </Drawer>
        </TemporaryDrawer>
        <div
          style={{
            width: '100%',
            height: 64
          }}>
          <button
            style={{
              width: 64,
              height: 44
            }}
            onClick={this.handleMenuButtonPress}>
            Menu
          </button>
        </div>
        <div
          style={{
            padding: 15
          }}>
          {this.props.children}
        </div>
      </Typography>
    );
  }
}

export default class Main extends React.Component {
  render (): React.Element<*> {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRedirect to="/typography" />
          <Route path="typography" component={TypographyExample} />
          <Route path="elevation" component={ElevationExample} />
        </Route>
      </Router>
    );
  }
}
