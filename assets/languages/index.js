import i18next from 'i18next';
import hindi from './hindi.json';
import english from './english.json';
import {initReactI18next} from 'react-i18next';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    hi: hindi,
    en: english
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;