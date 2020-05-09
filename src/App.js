import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import pages from './enums/pages';
import labels_de from './i18n/de';
import Footer from './components/Footer';
import languages from "./enums/languages";
import labels_en from "./i18n/en";
import LandingPage from "./components/LandingPage";

function App() {

    const [scrollPosY, setScrollPosY] = useState(0);
    const [selectedLanguage,setSelectedLanguage] = useState(languages.DE);

    const handleScroll = (event) => {
        setScrollPosY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

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
    }

    return (
        <div className="aco-web">
            <Header scrollPosY={scrollPosY} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
            <div className="content">
                <LandingPage label={label()} />
            </div>
            <Footer selectedLanguage={selectedLanguage}/>
        </div>
    );
}

export default App;
