import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

let lightFavicon = document.querySelector('link#light-theme-icon');
let darkFavicon = document.querySelector('link#dark-theme-icon');

const matcher = window.matchMedia('(prefers-color-scheme: dark)');
if (matcher.matches) {
    lightFavicon.remove();
    document.head.append(darkFavicon);
} else {
    darkFavicon.remove();
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
