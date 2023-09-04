import axios from 'axios';
import { authStore } from '~/store/auth';
import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp) => {
  const store = authStore(nuxtApp.$pinia);

  axios.interceptors.request.use((config) => {
    if (store.token) {
      config.headers.Authorization = `Bearer ${store.token}`;
    }
    return config;
  });
});
