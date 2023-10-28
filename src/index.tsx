import 'bootstrap/dist/css/bootstrap.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './Global/GlobalStyling';
import Routing from './pages/Routing/Routing';

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        <Routing />
    </BrowserRouter>,
    document.getElementById('root')
);
