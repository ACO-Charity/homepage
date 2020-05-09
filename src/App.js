import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import pages from './enums/pages';
import labels_de from './i18n/de';
import Footer from './components/Footer';
import languages from "./enums/languages";
import labels_en from "./i18n/en";

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
                <section id={pages.ABOUT_US}>
                    <div className="container jumbotron">
                        <h1>{label()[pages.ABOUT_US]}</h1>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                    </div>
                </section>
                <section id={pages.NEWS}>
                    <div className="container jumbotron">
                        <h1>{label()[pages.NEWS]}</h1>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                    </div>
                </section>
                <section id={pages.PROJECTS}>
                    <div className="container jumbotron">
                        <h1>{label()[pages.PROJECTS]}</h1>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                    </div>
                </section>
                <section id={pages.DONATION}>
                    <div className="container jumbotron">
                        <h1>{label()[pages.DONATION]}</h1>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                    </div>
                </section>
                <section id={pages.JOIN_US}>
                    <div className="container jumbotron">
                        <h1>{label()[pages.JOIN_US]}</h1>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                        <p> aksöldksaldsaöld</p>
                        <p>asdkölsakdölsakd</p>
                        <p>sadölsak</p>
                    </div>
                </section>
            </div>
            <Footer selectedLanguage={selectedLanguage}/>
        </div>
    );
}

export default App;
