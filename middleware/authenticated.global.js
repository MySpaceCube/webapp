import { authStore } from '~/store/auth';
import { apiStore } from '~/store/api';

export default defineNuxtPlugin((nuxt) => {
  const store = authStore(nuxt.$pinia);
  const api = apiStore(nuxt.$pinia);
  console.log(store.isLogged);
  console.log(api.apiVersion);
  console.log(api.apiUrl);
});
