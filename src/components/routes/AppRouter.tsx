import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from '../../App.tsx';

const AppRouter = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route Component={App} path="/"/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;