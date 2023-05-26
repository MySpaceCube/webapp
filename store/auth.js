import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: () => {
    return {
      user: null,
      isLogged: false,
      isAdmin: false
    };
  },
  actions: {
    getMe () {
      axios.get('https://localhost:9080/me')
        .then((response) => {
          console.log(response);

          return response.data;
        })
        .catch((error) => {
          console.error(error);

          return error;
        });
    }
  },
  getters: {
    filtersList: (state) => state.filtersList,
    getMaintenance: (state) => state.maintenance,
    getApiVersion: (state) => state.apiVersion
  }
});
