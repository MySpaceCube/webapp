import axios from 'axios';
import { authStore } from '~/store/auth';

export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = process.env.NUXT_PUBLIC_API_URL;
  const store = authStore(nuxtApp.$pinia);

  const api = axios.create({
    baseUrl: defaultUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: store.token
    }
  });
  return {
    provide: {
      api
    }
  };
});
