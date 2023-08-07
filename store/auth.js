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
          this.user.roles.forEach((role) => {
            if (role === 'ROLE_ADMIN' ||
              role === 'ROLE_SUPER_ADMIN' ||
              role === 'ROLE_EDITOR' ||
              role === 'ROLE_MODERATOR'
            ) {
              this.isAdmin = true;
            }
          });
          localStorage.setItem('token', res.data.token);
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
      await axios.get(this.apiUrl + '/users/me', {
        headers: {
          Authorization: 'Bearer ' + token ?? this.token
        }
      }).then((response) => {
        this.user = response.data.data;
      }).catch((e) => {
        this.logout();
      });
    },
    logout () {
      this.isAdmin = false;
      this.user = {};
      this.token = null;
      this.isLogged = false;
      localStorage.setItem('token', null);
    }
  },
  getters: {
    getIsLogged: (state) => state.isLogged
  }
});
