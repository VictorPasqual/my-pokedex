import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translations from './locales';
import { getLocale } from '../helpers/LocaleHelper';

export const i18nConfig: any = {
  resources: translations,
  fallbackLng: getLocale() || 'pt',
  defaultNS: 'translations',
  default: getLocale() || 'pt',
};

i18n.use(initReactI18next).init(i18nConfig);

export default i18n;
