import React, { PureComponent, Fragment, Dispatch } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Hidden, Fab } from '@material-ui/core';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

interface Props {
  classes: any;
  dispatch: any;
}
interface State {}
class Account extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, dispatch } = this.props;

    return (
      <Fragment>
        <Button>Hola</Button>
      </Fragment>
    );
  }
}

export default connect()(Account);
