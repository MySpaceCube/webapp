const stateObj = {
  locales: ['fr'],
  locale: 'fr',
  urlConfig: {}
};

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
  setConfig (state, urlConfig) {
    state.urlConfig = urlConfig;
  }
};

export const state = () => stateObj;

export default {
  namespaced: true,
  state,
  mutations
};
