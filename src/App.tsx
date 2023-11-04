import {useEffect, useState} from 'react';
import './App.scss';
import Header from './components/header/Header.tsx';

function App() {
    const [scrollPosY, setScrollPosY] = useState(0);
    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        setScrollPosY(window.scrollY);

        setCurrentSection('');

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScroll = () => {
        setScrollPosY(window.scrollY);
    };

    return (
        <div className="aco-web">
            <Header scrollPosY={scrollPosY} currentSection={currentSection}/>
        </div>
    );
}

export default App;
