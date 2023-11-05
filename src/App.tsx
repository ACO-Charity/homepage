import {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header.tsx';
import ImprintPage from './components/pages/ImprintPage.tsx';
import LandingPage from './components/pages/LandingPage.tsx';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage.tsx';
import {useScrollPosition} from './stores/ScrollPositionStore.ts';
import {useSection} from './stores/SectionStore.ts';

function App() {
    const {setScrollPosition} = useScrollPosition();
    const {currentSection, setCurrentSection} = useSection();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        setScrollPosition(window.scrollY);

        setCurrentSection('');

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    return (
        <BrowserRouter basename="/">
            <div className="aco-web">
                <Header currentSection={currentSection}/>
                <Routes>
                    <Route path="/privacy-policy" Component={PrivacyPolicyPage}/>
                    <Route path="/imprint" Component={ImprintPage}/>
                    <Route path="/" Component={LandingPage}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
