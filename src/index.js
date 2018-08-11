import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './_global.scss';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';

const store = configureStore({});

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();