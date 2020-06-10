import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import labels_de from './i18n/de';
import Footer from './components/Footer';
import languages from "./enums/languages";
import labels_en from "./i18n/en";
import LandingPage from "./components/LandingPage";
import {Switch, Route} from "react-router-dom";
import Imprint from "./components/Imprint";
import PrivacyPolicy from "./components/PrivacyPolicy";

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
            default:
                return languages.DE;
        }
    };

    return (
        <div className="aco-web">
            <Header currentSection={currentSection}
                    scrollPosY={scrollPosY}
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                    label={label()}/>
            <div className="content">
                <Switch>
                    <Route path="/imprint">
                        <Imprint label={label()}/>
                    </Route>
                    <Route path="/privacy-policy">
                        <PrivacyPolicy label={label()}/>
                    </Route>
                    <Route path="/">
                        <LandingPage setCurrentSection={setCurrentSection} label={label()}/>
                    </Route>
                </Switch>
            </div>
            <Footer selectedLanguage={selectedLanguage} label={label()}/>
        </div>
    );
}

export default App;
