import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';

let middlewares = [];

if (process.env.NODE_ENV !== 'production') {
    middlewares = [ ...middlewares, logger ]
}

const createStoreWithMiddlewares = applyMiddleware(
    ...middlewares
)( createStore );

export default function configureStore(initialState) {
    return createStoreWithMiddlewares(
        rootReducer, 
        initialState,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
}