import 'bootstrap/dist/css/bootstrap.css';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './Global/GlobalStyling';
import Routing from './pages/Routing/Routing';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routing />
        </BrowserRouter>
    );
};

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(<App />);
