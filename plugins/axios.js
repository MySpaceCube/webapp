import * as AxiosLogger from 'axios-logger';
import {
  CoreApi
} from '../api';

export default async function ({ store, redirect, query = {} }, inject) {
  if (store) {
    const coreApiClient = new CoreApi(apiConfiguration.core.api_url);

    store.commit('preferences/setConfig', apiConfiguration);
    coreApiClient.client.interceptors.request.use(function (config) {
      config.headers.Authorization = 'Bearer ' + (store.getters['auth/token'] || query.token);
      return config;
    });

    coreApiClient.client.interceptors.response.use(function (response) {
      return response;
    }, function (err) {
      if (err.response && err.response.status === 401) {
        store.commit('auth/setToken', null);
        redirect('/login');
        return Promise.reject(err);
      } else {
        return AxiosLogger.errorLogger(err, {
          prefixText: err.config.baseURL
        });
      }
    });

    inject('coreApiClient', coreApiClient);
  }
}
