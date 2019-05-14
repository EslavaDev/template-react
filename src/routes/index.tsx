import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProtectetdRoute from './ProtectedRoute';
// Routes
// tslint:disable-next-line:function-name
export default function AppRouter() {
  return (
    <Suspense
      fallback={<h1>Loading...</h1>}
    >
      <Switch>
      </Switch>
    </Suspense>
  );
}
