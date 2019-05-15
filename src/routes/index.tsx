import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProtectetdRoute from './ProtectedRoute';
// Routes

const Account = React.lazy(() => import('../pages/account'));
// tslint:disable-next-line:function-name
export default function AppRouter() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <ProtectetdRoute path="/" exact component={Account} />
        <ProtectetdRoute path="/home" exact component={Account} />
        <ProtectetdRoute path="/my-account" exact component={Account} />
      </Switch>
    </Suspense>
  );
}
