import axios from 'axios';
import { API_BASE_URL } from '@/config';
import { authService } from './AuthService';

export class CasinhaApi {
  constructor(endpointSufix = false) {
    this.endpoint = API_BASE_URL;

    if (endpointSufix) {
      this.endpoint = this.endpoint + endpointSufix;
    }
  }

  getList(filters = {}) {
    return axios({
      method: 'get',
      url: this.endpoint,
      params: filters,
      headers: this.headers,
    });
  }

  get(id) {
    if (!id) return this.getMissingIdError();
    return axios({
      method: 'get',
      url: `${this.endpoint}/${id}`,
      headers: this.headers,
    });
  }

  post(body) {
    return axios({
      method: 'post',
      url: this.endpoint,
      headers: this.postHeaders,
      data: body,
    });
  }

  put(id, body) {
    if (!id) return this.getMissingIdError();
    return axios({
      method: 'post',
      url: `${this.endpoint}/${id}`,
      headers: this.postHeaders,
      data: body,
    });
  }

  delete(id) {
    if (!id) return this.getMissingIdError();
    return axios({
      method: 'delete',
      url: `${this.endpoint}/${id}`,
      headers: this.headers,
    });
  }

  get postHeaders() {
    const headers = { 'Content-Type': 'application/json' };

    const accessToken = authService.getAccessToken();
    if (accessToken)
      headers["Authorization"] = 'Bearer ' + accessToken;

    return headers;
  }

  get headers() {
    const headers = {};

    const accessToken = authService.getAccessToken();
    if (accessToken)
      headers['Authorization'] = 'Bearer ' + accessToken;

    return headers;
  }

  getMissingIdError() {
    return {
      data: {
        success: false,
        message: 'Esse método não pode ser utilizado sem um ID',
      },
    };
  }

  getMethodNotAvailable() {
    return {
      data: {
        success: false,
        message: 'Método não disponível',
      },
    };
  }
}
