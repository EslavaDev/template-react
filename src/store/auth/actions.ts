import { AuthActionsType } from './actions.name';

export const logIn = (data: any) => ({
  type: AuthActionsType.LOGIN,
  payload: data,
});

export const logInSuccess = (payload: any) => ({
  payload,
  type: AuthActionsType.LOGIN_SUCCESS,
});

// Handle auth errors
export const authError = (error: any) => ({
  type: AuthActionsType.AUTH_ERROR,
  payload: error,
});
