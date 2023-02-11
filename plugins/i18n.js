import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.preferences.locale,
    fallbackLocale: 'fr',
    messages: {
      fr: require('../locales/fr.json')
    }
  });

  app.i18n.localePath = (link) => {
    if (link.charAt(0) !== '/') {
      link = `/${link}`;
    }
    if (app.i18n.locale !== app.i18n.fallbackLocale) {
      link = `/${app.i18n.locale}${link}`;
    }
    return link;
  };

  app.i18n.localeName = (name) => {
    if (
      app.i18n.locale !== app.i18n.fallbackLocale &&
      name.substring(0, 5) !== 'lang-'
    ) {
      name = `lang-${name}`;
    }
    return name;
  };

  app.i18n.switchLocalePath = (lang, path) => {
    if (store.state.preferences.locales.includes(path.substring(1, 3))) {
      path = path.substring(3);
    }
    if (lang !== app.i18n.fallbackLocale) {
      return `/${lang}${path}`;
    }
    return path;
  };
};
