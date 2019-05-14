import React, { Component } from 'react';
import logo from '../logo.png';

import { Button, Skeleton } from 'antd';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <img className="logo" src={logo} />
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" block>
      Primary
    </Button>
        <h1 className="title">React Starters</h1>
        <Skeleton active />
      </div>
    );
  }
}
