import axios from '../utils/axios';
import { CasinhaApi } from './CasinhaApi';

class AuthService {
  handleAuthentication() {
    const accessToken = this.getAccessToken();

    if (!accessToken) {
      return;
    }

    if (this.isValidToken(accessToken)) {
      this.setSession(accessToken);
    } else {
      this.setSession(null);
    }
  }

  loginWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      const loginApi = new CasinhaApi('/login');

      const payload = new FormData();
      payload.append('username', email);
      payload.append('password', password);

      loginApi
        .post(payload)
        .then(response => {
          const token = response.data.tokens.access_token;
          const user = {
            id: response.data.user.id,
            firstName: response.data.user.first_name,
            lastName: response.data.user.last_name,
            username: response.data.user.username,
            role: {
              id: response.data.user.role_id,
              title: response.data.user.role_title,
            },
          };
          if (token && user.id) {
            this.setSession(token);
            resolve({
              token,
              user,
            });
          } else {
            reject(response.error);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  loginInWithToken() {
    return new Promise((resolve, reject) => {
      const loginApi = new CasinhaApi('/users');
      loginApi
        .get('me')
        .then(response => {
          if (response.data) {
            resolve(response.data);
          } else {
            resolve(false);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  logout() {
    this.setSession(null);
  }

  setSession(accessToken) {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem('accessToken');
      delete axios.defaults.headers.common.Authorization;
    }
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  isValidToken(accessToken) {
    if (!accessToken) {
      return false;
    }
    return true;
  }

  isAuthenticated() {
    return !!this.getAccessToken();
  }
}

export const authService = new AuthService();
