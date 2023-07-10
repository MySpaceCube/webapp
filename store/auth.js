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
          await this.updateUser(res.data.token);
          this.isLogged = true;
          return res.data.token;
        });
    },
    async createUser (data) {
      await axios.post(this.apiUrl + '/users/', data)
        .then(async (res) => {
          await this.fetchUser({ email: data.email, password: data.password });
        });
    },
    async updateUser (token) {
      this.user = (await axios.get(this.apiUrl + '/users/me', {
        headers: {
          Authorization: 'Bearer ' + token ?? this.token
        }
      })).data.data;
    }
  },
  getters: {
    getIsLogged: (state) => state.isLogged
  }
});
