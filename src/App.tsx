import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Button, Typography } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import store, { history } from './store';
import { theme } from './config/theme';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div className="container">
              <h1 className="title">React Starters</h1>
              <Button disableRipple variant="outlined" color="primary">
                <Typography autoCapitalize="true" variant="inherit">
                  Superame esta bebe
                </Typography>
              </Button>
            </div>
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
