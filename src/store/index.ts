import {
  createStore,
  combineReducers,
  applyMiddleware,
  Reducer,
  AnyAction,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from '@redux-saga/core/effects';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// Reducers & Sagas
import { sidenavReducer } from './sidenav/reducer';
import { authReducer, authSagas } from './auth/index';


export const history = createBrowserHistory();

const metaReducers: Reducer<any, any> = combineReducers({
  auth: authReducer,
  router: connectRouter(history),
  sidenav: sidenavReducer,

});

// Saga
function* rootSaga() {
  yield all([
    ...authSagas,
  ]);
}

const sagaMiddleware = createSagaMiddleware();

// Middlewares
const middlewares: any = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(metaReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
