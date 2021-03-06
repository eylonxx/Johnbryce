import jwtDecode from 'jwt-decode';
import UserModel from '../Models/UserModel';

// 1. Products State - The global state relate to products:
export class AuthState {
  public user: UserModel = null;
  public token: string = null;
}

// 2. Products Action Type - list of actions we can do on the above ProductsState:
export enum AuthActionType {
  Register = 'Register',
  Login = 'Login',
  Logout = 'Logout',
}

// 3. Product Action - interface for building a single action from the above ProductsActionType
export interface AuthAction {
  type: AuthActionType; // The type of the acton to perform.
  payload?: string; // The data we need to do that action
}

// 4. Action Creators - Functions for creating suitable Action objects:
export function registerAction(token: string): AuthAction {
  const action: AuthAction = { type: AuthActionType.Register, payload: token };
  return action;
}
export function loginAction(token: string): AuthAction {
  const action: AuthAction = { type: AuthActionType.Login, payload: token };
  return action;
}
export function logoutAction(): AuthAction {
  const action: AuthAction = { type: AuthActionType.Register };
  return action;
}

// 5. Products Reducer - Do any of the above actions:
export function AuthReducer(currentState: AuthState = new AuthState(), action: AuthAction): AuthState {
  const newState = { ...currentState };
  switch (action.type) {
    case AuthActionType.Register:
    case AuthActionType.Login:
      const token = action.payload;
      newState.token = token;
      newState.user = (jwtDecode(token) as any).user;
      break;
    case AuthActionType.Logout:
      newState.user = null;
      newState.token = null;
      break;
  }
  return newState;
}
