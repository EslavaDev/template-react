import React, { PureComponent } from 'react';
import { NavLink, matchPath, withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { styles } from './styles';
import { Hidden, Drawer, Typography, ListItemIcon } from '@material-ui/core';
import { connect } from 'react-redux';
import { ToggleDrawer } from '../../store/sidenav/actions';
import { mainMenu, secondaryMenu } from './constants';

const match = (route: string) => matchPath(window.location.pathname, route);
class Menu extends PureComponent<any, any> {
  state = { avatar: '/images/empty-states/avatar.png' };

  componentDidMount() {}

  render() {
    const { classes, dispatch, theme, open } = this.props;
    const { avatar } = this.state;

    const drawer = (
      <div>
        {/* User info */}
        <div className={classes.toolbar}>
          <Link to="/profile">
            <img className={classes.avatar} src={avatar} />
          </Link>
          <List>
            <NavLink
              to="/profile"
              className={classes.menuItem}
              activeClassName={classes.activeOption}
              exact
            >
              <ListItem
                button
                className={classes.cntItemOption}
                key={`userMenu`}
              >
                <ListItemText
                  primary={
                    <Typography className={classes.menuItemLabel}>
                      test
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant={'h6'}
                      className={classes.menuItemLabelSecondary}
                      noWrap
                    >
                      test@gmail.com
                    </Typography>
                  }
                />
                <ListItemIcon
                  className={`${classes.cntMenuIcon} ${
                    match('/profile') ? classes.cntMenuIconActive : ''
                  }`}
                >
                  <span className={`${classes.menuIcon} ic-chevron-right`} />
                </ListItemIcon>
              </ListItem>
            </NavLink>
          </List>
        </div>
        <Divider className={classes.separator} />
        {/* Main Menu */}
        <List>
          {mainMenu.map((item, index) => (
            <NavLink
              to={`/${item.label}`}
              className={classes.menuItem}
              key={`mainMenu_${index}`}
              activeClassName={classes.activeOption}
              exact
            >
              <ListItem button className={classes.cntItemOption}>
                <ListItemText
                  primary={
                    <Typography className={classes.menuItemLabel}>
                      {item.label}
                    </Typography>
                  }
                />
                <ListItemIcon
                  className={`${classes.cntMenuIcon} ${
                    match(`/${item.label}`) ? classes.cntMenuIconActive : ''
                  }`}
                >
                  <span className={`${classes.menuIcon} ic-chevron-right`} />
                </ListItemIcon>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider className={classes.separator} />
        {/* Secondary Menu */}
        <List>
          {secondaryMenu.map((item, index) => (
            <NavLink
              to="/my-account"
              className={classes.menuItem}
              key={`secondMenu_${index}`}
              activeClassName={classes.activeOption}
              exact
            >
              <ListItem button className={classes.cntItemOption}>
                <ListItemText
                  primary={
                    <Typography className={classes.menuItemLabel}>
                      {item.label}
                    </Typography>
                  }
                />
                <ListItemIcon
                  className={`${classes.cntMenuIcon} ${
                    match('/my-account') ? classes.cntMenuIconActive : ''
                  }`}
                >
                  <span className={`${classes.menuIcon} ic-chevron-right`} />
                </ListItemIcon>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    );

    return (
      <nav className={open ? classes.drawer : ''}>
        <Hidden smUp>
          <Drawer
            container={this.props.container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={open}
            onClose={() => dispatch(ToggleDrawer())}
            classes={{ paper: classes.drawerPaper }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            transitionDuration={600}
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            onClose={() => dispatch(ToggleDrawer())}
            classes={{ paper: classes.drawerPaper }}
            variant="persistent"
            open={open}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

const mapStateToProps = ({ sidenav, users }: any) => ({
  open: sidenav.open,
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps),
)(withRouter(Menu));
