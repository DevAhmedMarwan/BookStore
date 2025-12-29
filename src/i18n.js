import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: "en", // اللغة الافتراضية عند فتح الموقع
    fallbackLng: "en", // لو مفيش ترجمة للغة محددة
    interpolation: { escapeValue: false }, // لتجنب مشاكل XSS
  });

export default i18n;
