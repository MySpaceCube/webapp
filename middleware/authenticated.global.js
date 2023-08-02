import { authStore } from '~/store/auth';
import { isAdmin } from '~/utils/utils';
import { apiStore } from '~/store/api';
import { useRoute } from '#app';

export default defineNuxtPlugin((nuxt) => {
  const store = authStore(nuxt.$pinia);
  const api = apiStore(nuxt.$pinia);
  console.log(store.isLogged);
  console.log(api.apiVersion);
  console.log(api.apiUrl);

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
      });
  }

  if (store.isLogged && store.token) {
    const routes = ['/login', '/register'];
    const globalRoute = useRoute;

    console.log(globalRoute.path);
    if (routes.includes(globalRoute.path)) {
      return navigateTo('/', { replace: true, redirectCode: 301 });
    }
  }
});
