import httpClient from './httpClient';

class AuthApi {
  static login(auth) {
    return httpClient.post('/user_token', { auth });
  }
}

export default AuthApi;
