import { AuthActionsType } from './actions.name';

export interface AuthDataState {
  isAuthenticated: boolean;
  loading: boolean;
  token: string;
  error: string;
}

const token = localStorage.getItem('spa') || '';

const initialState: AuthDataState = {
  token,
  isAuthenticated: !!token || false,
  loading: false,
  error: '',
};

export default function authenticationReducer(
  state: AuthDataState = initialState,
  action: any,
): AuthDataState {
  switch (action.type) {
    case AuthActionsType.LOGIN: {
      return { ...state, loading: true };
    }
    case AuthActionsType.LOGIN_SUCCESS: {
      return { ...state, loading: false, isAuthenticated: true };
    }
    
    case AuthActionsType.AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
