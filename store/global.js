import { defineStore } from 'pinia';
import * as pkg from '../package.json';

export const globalStore = defineStore({
  id: 'Global',
  state: () => {
    return {
      locales: ['fr', 'en'],
      locale: 'en',
      beta: true,
      maintenance: false,
      apiVersion: '0.0.0',
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      imgPath: process.env.NUXT_PUBLIC_IMG_URL,
      version: pkg.version,
      urlConfig: {}
    };
  },
  actions: {
    SET_LANG (locale) {
      if (this.locales.includes(locale)) {
        this.locale = locale;
      } else {
        this.locale = 'en';
      }
    },
    setConfig (state, urlConfig) {
      this.urlConfig = urlConfig;
    }
  },
  mutations: {
  },
  getters: {
    filtersList: (state) => state.filtersList,
    getMaintenance: (state) => state.maintenance,
    getApiVersion: (state) => state.apiVersion
  }
});
