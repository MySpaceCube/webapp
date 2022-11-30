export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect,
}) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return;
  }
  const defaultLocale = app.i18n.fallbackLocale;
  // Get locale from params
  const locale = params.lang || defaultLocale;
  if (!store.state.preferences.locales.includes(locale)) {
    return error({ message: "This page could not be found.", statusCode: 404 });
  }
  // Set locale
  store.commit("preferences/SET_LANG", locale);
  app.i18n.locale = store.state.preferences.locale;
  // If route is /<defaultLocale>/... -> redirect to /...
  if (
    locale === defaultLocale &&
    route.fullPath.indexOf("/" + defaultLocale + "/") === 0
  ) {
    const toReplace = "^/" + defaultLocale + "/";
    const re = new RegExp(toReplace);
    return redirect(route.fullPath.replace(re, "/"));
  }
}
