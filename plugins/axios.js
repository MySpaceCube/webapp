import axios from 'axios';
import { authStore } from '~/store/auth';
import {defineNuxtPlugin, useRuntimeConfig} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  const store = authStore(nuxtApp.$pinia);
  const api = useRuntimeConfig().public.apiUrl;

  axios.interceptors.request.use((config) => {
    if (store.token) {
      config.headers.Authorization = `Bearer ${store.token}`;
    }
    return config;
  });

  return {
    provide: {
      api
    }
  };
});
