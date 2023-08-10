import { authStore } from '~/store/auth';
import { isAdmin, isPremium } from '~/utils/utils';
import { useRoute } from '#app';
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((nuxt) => {
  const store = authStore(nuxt.$pinia);

  // Do not run on server
  if (process.server) {
    return;
  }

  const token = localStorage.getItem('token');

  if (token) {
    store.token = token;
    store.isLogged = true;
    store.updateUser(token)
      .then(() => {
        store.isAdmin = isAdmin(store.user.roles[0]);
        if (store.isAdmin) {
          store.maxUploadFile = 100;
        } else if (isPremium(store.user.roles[0])) {
          store.maxUploadFile = 10;
        }
      });
  }

  if (store.isLogged && store.token) {
    const routes = ['/login', '/register'];
    const globalRoute = useRoute;

    if (routes.includes(globalRoute.path)) {
    //   TODO
    }
  }
});
