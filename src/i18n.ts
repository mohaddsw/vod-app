import Vue from "vue";
import VueI18n from "vue-i18n";
import axios from "axios";

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: {},
});

async function loadLocaleMessages(locale: string): Promise<void> {
  if (Object.keys(i18n.getLocaleMessage(locale)).length === 0) {
    const { data } = await axios.get(`/locales/${locale}.json`);
    console.log(data);
    i18n.setLocaleMessage(locale, data);
  }
  if (i18n.locale !== locale) {
    i18n.locale = locale;
  }
}
(async function () {
  await loadLocaleMessages("fa");
})();

export default i18n;
