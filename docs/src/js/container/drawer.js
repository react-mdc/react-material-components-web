/* @flow */
import React from 'react';
import {Link} from 'react-router';

import {
  TemporaryDrawer,
  Drawer,
  Content,
  Header,
  HeaderContent
} from '@react-mdc/drawer/lib/temporary';
import {Themed} from '@react-mdc/theme';
import {SELECTED_CLASS_NAME} from '@react-mdc/drawer/lib/temporary/constants';
import {List, Divider, group, item} from '@react-mdc/list';

import styles from './styles.css';

type Props = {
  onOpenDrawer: () => void,
  onCloseDrawer: () => void,
  open: boolean
};

export default class MainDrawer extends React.Component {
  props: Props

  static defaultProps = {
    onOpenDrawer: () => {},
    onCloseDrawer: () => {}
  }

  handleOpenDrawer = () => {
    this.props.onOpenDrawer();
  }

  handleCloseDrawer = () => {
    this.props.onCloseDrawer();
  }

  handleClickLink = () => {
    this.props.onCloseDrawer();
  }

  handleClickHeader = () => {
    this.props.onCloseDrawer();
  }

  render (): React.Element<*> {
    return (
      <TemporaryDrawer
        className={styles.drawer}
        open={this.props.open}
        onOpenDrawer={this.handleOpenDrawer}
        onCloseDrawer={this.handleCloseDrawer}>
        <Drawer>
          <Header>
            <HeaderContent
              className={styles.headerLink}
              wrap={<Themed wrap={Link} />}
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
                to="/switch"
                onClick={this.handleClickLink}>
                Switch
              </item.ListItem>
              <item.ListItem
                wrap={Link}
                activeClassName={SELECTED_CLASS_NAME}
                to="/textfield"
                onClick={this.handleClickLink}>
                Textfield
              </item.ListItem>
              <item.ListItem
                wrap={Link}
                activeClassName={SELECTED_CLASS_NAME}
                to="/layout-grid"
                onClick={this.handleClickLink}>
                Layout Grid
              </item.ListItem>
              <Divider wrap={<hr />} />
              <item.ListItem
                wrap={<a />}
                href="https://github.com/Hardtack/react-material-components-web"
                target="_blank">
                GitHub Repository
              </item.ListItem>
            </List>
          </Content>
        </Drawer>
      </TemporaryDrawer>
    );
  }
}
