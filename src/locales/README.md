# Setting up a new language
1. In the preferences store, add an entry to the locales array
2. Create a new dictionary file with all the translations in ~/locales. This file must respect the same architecture used for the other languages.
3. In the plugin i18n, add a new entry inside the messages object. the key must be the one used in the store and the value the path to the dictionary file.

If the language has been configured correctly, at the root of the page path, if you add /:lang, the page must refresh with the new language.

To switch the language, you have to call the function $i18n.switchLocalePath('my-new-lang', $route.path) somewhere in the app.