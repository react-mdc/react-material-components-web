/* @flow */
import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';

import {
  TemporaryDrawer,
  Drawer,
  Content,
  Header,
  HeaderContent
} from '@react-mdc/drawer/lib/temporary';
import {SELECTED_CLASS_NAME} from '@react-mdc/drawer/lib/temporary/constants';
import {Typography} from '@react-mdc/typography';
import {Themed} from '@react-mdc/theme';
import {Elevation} from '@react-mdc/elevation';
import {List, Divider, group, item} from '@react-mdc/list';

import TypographyExample from './typography';
import ElevationExample from './elevation';
import ButtonExample from './button';
import FabExample from './fab';
import CardExample from './card';
import FormFieldExample from './form-field';
import RadioExample from './radio';
import RippleExample from './ripple';
import CheckboxExample from './checkbox';
import TextfieldExample from './textfield';

import Welcome from './welcome';
import NotFound from './not-found';
import {MaterialIcon} from './icon';

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

  handleClickLink = () => {
    this.setState({
      drawerOpen: false
    });
  }

  handleClickHeader = () => {
    this.setState({
      drawerOpen: false
    });
  }

  renderMenu (): React.Element<*> {
    return (
      <List wrap={<div />}>
        <item.ListItem
          wrap={Link}
          activeClassName={SELECTED_CLASS_NAME}
          to="/typography"
          onClick={this.handleClickLink}>
          Typography
        </item.ListItem>
        <item.ListItem
          wrap={Link}
          activeClassName={SELECTED_CLASS_NAME}
          to="/elevation"
          onClick={this.handleClickLink}>
          Elevation
        </item.ListItem>
        <item.ListItem
          wrap={Link}
          activeClassName={SELECTED_CLASS_NAME}
          to="/button"
          onClick={this.handleClickLink}>
          Button
        </item.ListItem>
        <item.ListItem
          wrap={Link}
          activeClassName={SELECTED_CLASS_NAME}
          to="/fab"
          onClick={this.handleClickLink}>
          Fab
        </item.ListItem>
        <item.ListItem
          wrap={Link}
          activeClassName={SELECTED_CLASS_NAME}
          to="/card"
          onClick={this.handleClickLink}>
          Card
        </item.ListItem>
        <item.ListItem
          wrap={Link}
          activeClassName={SELECTED_CLASS_NAME}
          to="/form-field"
          onClick={this.handleClickLink}>
          Form Field
        </item.ListItem>
        <item.ListItem
          wrap={Link}
          activeClassName={SELECTED_CLASS_NAME}
          to="/radio"
          onClick={this.handleClickLink}>
          Radio
        </item.ListItem>
        <item.ListItem
          wrap={Link}
          activeClassName={SELECTED_CLASS_NAME}
          to="/ripple"
          onClick={this.handleClickLink}>
          Ripple
        </item.ListItem>
        <item.ListItem
          wrap={Link}
          activeClassName={SELECTED_CLASS_NAME}
          to="/checkbox"
          onClick={this.handleClickLink}>
          Checkbox
        </item.ListItem>
        <item.ListItem
          wrap={Link}
          activeClassName={SELECTED_CLASS_NAME}
          to="/textfield"
          onClick={this.handleClickLink}>
          Textfield
        </item.ListItem>
        <Divider wrap={<hr />} />
        <item.ListItem
          wrap={<a />}
          href="https://github.com/Hardtack/react-material-components-web"
          target="_blank">
          GitHub Repository
        </item.ListItem>
      </List>
    );
  }

  renderToolbar (): React.Element<*> {
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
          onClick={this.handleMenuButtonPress}>
          menu
        </MaterialIcon>
      </Elevation>
    );
  }

  render (): React.Element<*> {
    return (
      <Typography
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column'
        }}>
        <TemporaryDrawer
          style={{
            zIndex: 1
          }}
          open={this.state.drawerOpen}
          onOpenDrawer={this.handleOpenDrawer}
          onCloseDrawer={this.handleCloseDrawer}>
          <Drawer>
            <Header>
              <HeaderContent
                wrap={<Themed wrap={Link} />}
                style={{
                  textDecoration: 'none'
                }}
                onClick={this.handleClickHeader}
                to="/"
                textColor="primary"
                onColor="primary"
                backgroundColor="primary">
                React Material Components Web
              </HeaderContent>
            </Header>
            <Content
              wrap={<group.ListGroup wrap={<div />} />}>
              {this.renderMenu()}
            </Content>
          </Drawer>
        </TemporaryDrawer>
        {this.renderToolbar()}
        <div
          style={{
            padding: 16,
            overflow: 'scroll',
            display: 'flex',
            flex: 1,
            flexGrow: 1
          }}>
          {this.props.children || (<Welcome />)}
        </div>
      </Typography>
    );
  }
}

export default class Main extends React.Component {
  render (): React.Element<*> {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Container}>
          <Route path="typography" component={TypographyExample} />
          <Route path="elevation" component={ElevationExample} />
          <Route path="button" component={ButtonExample} />
          <Route path="fab" component={FabExample} />
          <Route path="card" component={CardExample} />
          <Route path="form-field" component={FormFieldExample} />
          <Route path="radio" component={RadioExample} />
          <Route path="ripple" component={RippleExample} />
          <Route path="checkbox" component={CheckboxExample} />
          <Route path="textfield" component={TextfieldExample} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
  }
}
