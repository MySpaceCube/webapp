import { defineStore } from 'pinia';
import axios from 'axios';

export const authStore = defineStore({
  id: 'Authentication',
  state: () => {
    return {
      isAdmin: false,
      isLogged: false,
      token: null,
      user: {}
    };
  },
  actions: {
    async fetchUser (data) {
      // TODO: Replace localhost by const
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
