import { createI18n } from "vue-i18n";

const messages = {
  en: {
    // Add all your English translations here
    welcome: "Welcome",
    // ...
  },
  nl: {
    // Add all your Dutch translations here
    welcome: "Welkom",
    // ...
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
