import axios from 'axios';
import { defineStore } from 'pinia';

export const apiStore = defineStore({
  id: 'Api',
  state: () => {
    return {
      maintenance: false,
      apiVersion: '0.0.0',
      apiUrl: process.env.NUXT_PUBLIC_API_URL
    };
  }
});

export const getters = {
  getMaintenance (state) {
    return state.maintenance;
  },
  getApiVersion (state) {
    return state.apiVersion;
  }
};

export const mutations = {
  setMaintenance (state, maintenance) {
    state.maintenance = maintenance;
  }
};

export const actions = {
  async fetchApiInfo ({ state }) {
    axios.get('http://localhost:3000')
      .then((response) => {
        this.state.apiVersion = response.data.version;
      })
      .catch((error) => {
        console.error(error);

        return error;
      });
  },
  async createFeedback (payload) {
    axios.post(this.apiUrl + '/feedback', payload)
      .then((response) => {
        this.state.apiVersion = response.data.version;
      })
      .catch((error) => {
        console.error(error);

        return error;
      });
  }
};
