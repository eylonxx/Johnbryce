import axios from 'axios';
import CredentialsModel from '../Models/CredentialsModel';
import UserModel from '../Models/UserModel';
import { loginAction, logoutAction, registerAction } from '../Redux/AuthState';
import store from '../Redux/Store';

class AuthService {
  public async register(user: UserModel): Promise<void> {
    const response = await axios.post<string>('http://localhost:3030/api/auth/register', user);
    const token = response.data;
    store.dispatch(registerAction(token));
  }

  public async login(credentials: CredentialsModel): Promise<void> {
    const response = await axios.post<string>('http://localhost:3030/api/auth/login', credentials);
    const token = response.data;
    store.dispatch(loginAction(token));
  }

  public async logout() {
    store.dispatch(logoutAction());
  }

  public isLoggedIn(): boolean {
    return store.getState().authState.user !== null;
  }
}
const authService = new AuthService();
export default authService;
