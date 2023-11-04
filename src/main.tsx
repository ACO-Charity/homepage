import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {I18nextProvider} from 'react-i18next';
import AppRouter from './components/routes/AppRouter.tsx';
import i18n from './i18n/i18n.ts';
import './styles/fonts.scss';
import './styles/index.scss';

let lightFavicon = document.querySelector('link#light-theme-icon');
let darkFavicon = document.querySelector('link#dark-theme-icon');

const matcher = window.matchMedia('(prefers-color-scheme: dark)');
if (matcher.matches && darkFavicon) {
    lightFavicon?.remove();
    document.head.append(darkFavicon);
} else {
    darkFavicon?.remove();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <AppRouter/>
        </I18nextProvider>
    </React.StrictMode>
);
