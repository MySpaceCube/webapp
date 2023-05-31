import { defineStore } from 'pinia';

export const usePreferenceStore = defineStore({
  id: 'preferences-store',
  state: () => {
    return {
      locales: ['fr', 'en'],
      locale: 'en',
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
