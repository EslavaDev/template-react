import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import AppRouter from '../../routes';
import { styles } from './styles';
import { Menu } from '../menu';
import { ToggleDrawer } from '../../store/sidenav/actions';
import { url } from 'inspector';

class Layout extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      avatar: 'images/empty-states/avatar.png',
      mobileOpen: false,
      translations: {},
      lang: 'en',
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
    }
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const {
      classes,
      dispatch,
      isAuthenticated,
      toolbarOpened,
      open,
    } = this.props;
    const { avatar } = this.state;
    const thereAreTranslations = true;

    return (
      <Router>
        {/*
        <div className="blocker">
          <img src={`/images/mobile-blocker-${lang}.png`} width="90%"/>
        </div>
      */}

        {!thereAreTranslations && (
          <div className={classes.cntLoader}>
            <CircularProgress
              thickness={4}
              size={50}
              className={classes.mainLoader}
              color="primary"
            />
          </div>
        )}
        {thereAreTranslations && (
          <div className={classes.root}>
            {isAuthenticated && toolbarOpened && (
              <>
                <AppBar
                  position="fixed"
                  color="default"
                  className={classes.appBar}
                  elevation={0}
                >
                  <Toolbar
                    className={open ? classes.toolbar : classes.toolbarFake2}
                  >
                    <div className={`${classes.menuIconFather}`}>
                      <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={() => dispatch(ToggleDrawer())}
                        className={classes.menuButton}
                      >
                        <span className={`${classes.menuIcon}`}>X</span>
                      </IconButton>
                      <img
                        style={{ objectFit: 'cover' }}
                        src={
                          'https://images.rappi.com/web/logo-rappi-new.svg?e=webp'
                        }
                      />
                    </div>
                    <Link to="/home">
                      <img className={classes.avatar} src={avatar} />
                    </Link>
                  </Toolbar>
                </AppBar>
                <Menu />
              </>
            )}
            <main className={classes.content}>
              {isAuthenticated && toolbarOpened && (
                <div className={classes.toolbarFake} />
              )}
              <AppRouter />
            </main>
          </div>
        )}
      </Router>
    );
  }
}

const mapStateToProps = ({ sidenav, auth }: any) => ({
  open: sidenav.open,
  toolbarOpened: sidenav.toolbarOpened,
  isAuthenticated: auth.isAuthenticated,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(Layout);
