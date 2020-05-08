import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';

function App() {

    const [scrollPosY, setScrollPosY] = useState(0);

    const handleScroll = (event) => {
        setScrollPosY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="aco-web">
            <Header scrollPosY={scrollPosY}/>
            <div className="content">
                <div className="container jumbotron">
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
            </div>
        </div>
    );
}

export default App;
