import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './languages';

export const AVAILABLE_LANGUAGES = ['en', 'tr'];

export const DEFAULT_LANGUAGE = 'tr';

i18n.use(initReactI18next).init({
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: AVAILABLE_LANGUAGES,
  resources: resources,
  react: {
    useSuspense: false,
    transSupportBasicHtmlNodes: true,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;