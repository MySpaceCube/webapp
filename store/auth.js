import { defineStore } from 'pinia';
import axios from 'axios';

export const authStore = defineStore({
  id: 'Authentication',
  state: () => {
    return {
      isAdmin: false,
      isLogged: false,
      token: null,
      user: {},
      apiUrl: process.env.NUXT_PUBLIC_API_URL
    };
  },
  actions: {
    async fetchUser (data) {
      this.token = await axios.post(this.apiUrl + '/sign-in', { email: data.email, password: data.password })
        .then(async (res) => {
          this.user = (await axios.get(this.apiUrl + '/users/me', {
            headers: {
              Authorization: 'Bearer ' + res.data.token
            }
          })).data.data;
          this.isLogged = true;
          return res.data.token;
        });
    }
  },
  getters: {
    getIsLogged: (state) => state.isLogged
  }
});
