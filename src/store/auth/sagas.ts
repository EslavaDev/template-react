import { call, put, takeLatest } from '@redux-saga/core/effects';
import { push } from 'connected-react-router';

import {
  logIn,
  logInSuccess,
  authError,
} from './actions';
import { AuthActionsType } from './actions.name';

export function* login(action: any): IterableIterator<any> {
  try {
    
  } catch (error) {
    console.log('login >> error', error);
    yield put(authError(error));
  }
}

export const authSagas = [
  takeLatest(AuthActionsType.LOGIN, login),
];
