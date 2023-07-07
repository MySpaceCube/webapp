import { authStore } from '~/store/auth';

export default defineNuxtPlugin((nuxt) => {
  const store = authStore(nuxt.$pinia);

  console.log(store.isLogged);
});
