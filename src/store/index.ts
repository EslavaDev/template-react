import {
  createStore,
  combineReducers,
  applyMiddleware,
  Reducer,
  AnyAction,
} from 'redux';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// Reducers
import { sidenavReducer } from './sidenav/reducer';
import { authReducer} from './auth/index';


export const history = createBrowserHistory();

const metaReducers: Reducer<any, AnyAction> = combineReducers({
  auth: authReducer,
  router: connectRouter(history),
  sidenav: sidenavReducer,

});


// Middlewares
const middlewares: any = [routerMiddleware(history)];

const store = createStore(metaReducers, applyMiddleware(...middlewares));

export default store;
