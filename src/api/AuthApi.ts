import httpClient from './httpClient';
import { ICredentials } from '../concepts/auth/types';

class AuthApi {
  static login(credentials: ICredentials) {
    return httpClient.post('/user_token', { auth: credentials });
  }
}

export default AuthApi;
