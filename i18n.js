// src/i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationJA from '../public/locales/ja/translation.json';
import translationEN from '../public/locales/en/translation.json';
import translationZH from '../public/locales/zh/translation.json';
import translationLA from '../public/locales/la/translation.json';

// i18nextの初期化
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ja: { translation: translationJA },
      en: { translation: translationEN },
      zh: { translation: translationZH },
      la: { translation: translationLA },
    },
    fallbackLng: 'ja',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
