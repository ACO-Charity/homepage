import React, {lazy, Suspense, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import labels_de from './i18n/de';
import languages from "./enums/languages";
import labels_en from "./i18n/en";
import {Switch, Route} from "react-router-dom";

const Header = lazy(() => import('./components/Header'));
const Imprint = lazy(() => import('./components/Imprint'));
const LandingPage = lazy(() => import('./components/LandingPage'));
const Footer = lazy(() => import('./components/Footer'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));

function App() {

    const [scrollPosY, setScrollPosY] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState(languages.DE);
    const [currentSection, setCurrentSection] = useState('');

    const handleScroll = (event) => {
        setScrollPosY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        setScrollPosY(window.pageYOffset);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const label = () => {
        switch (selectedLanguage) {
            case languages.DE:
                return labels_de;
            case languages.EN:
                return labels_en;
        }
    };

    const loading = <div className="lazy-loading" />

    return (
        <div className="aco-web">
            <Suspense fallback={loading}>
                <Header currentSection={currentSection}
                        scrollPosY={scrollPosY}
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                        label={label()}/>
            </Suspense>
            <div className="content">
                <Switch>
                    <Route path="/imprint">
                        <Suspense fallback={loading}>
                            <Imprint label={label()}/>
                        </Suspense>
                    </Route>
                    <Route path="/privacy-policy">
                        <Suspense fallback={loading}>
                            <PrivacyPolicy label={label()}/>
                        </Suspense>
                    </Route>
                    <Route path="/">
                        <Suspense fallback={loading}>
                            <LandingPage setCurrentSection={setCurrentSection} label={label()}/>
                        </Suspense>
                    </Route>
                </Switch>
            </div>
            <Suspense fallback={loading}>
                <Footer selectedLanguage={selectedLanguage} label={label()}/>
            </Suspense>
        </div>
    );
}

export default App;
