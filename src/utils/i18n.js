import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Syria Renata",
      home: "Home",
      story: "Our Story",
      projects: "Projects",
      invest: "Investments",
      transparency: "Transparency",
      impact: "Impact",
      partners: "Partners",
      contact: "Contact",
      // shto më shumë përkthime sipas nevojës
    }
  },
  sq: {
    translation: {
      welcome: "Mirë se vini në Syria Renata",
      home: "Kryefaqja",
      story: "Historia jonë",
      projects: "Projektet",
      invest: "Investimet",
      transparency: "Transparenca",
      impact: "Ndikimi",
      partners: "Partnerët",
      contact: "Kontakti",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;