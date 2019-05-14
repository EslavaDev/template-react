import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <ConnectedRouter history={history}>
      <div className="container">
        <h1 className="title">React Starters</h1>
      </div>
      // </ConnectedRouter>
      //</Provider>
    );
  }
}
