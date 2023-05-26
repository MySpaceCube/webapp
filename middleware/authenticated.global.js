import { useAuthStore } from '~/store/auth';

export default defineNuxtPlugin((nuxt) => {
  const store = useAuthStore(nuxt.$pinia);

  console.log(store.isLogged);
});
