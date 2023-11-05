import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import de from './de.json';
import en from './en.json';

const resources = {
    de: {translation: de},
    en: {translation: en}
};
i18n.use(initReactI18next)
    .init({
        lng: 'de',
        compatibilityJSON: 'v3',
        debug: false,
        interpolation: {
            escapeValue: false
        },
        resources
    });

export default i18n;