import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/index';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,initialState,
        compose(applyMiddleware(sagaMiddleware), 
            window.devToolsExtension ? window.devToolsExtension() : f => f)
    );
    
    sagaMiddleware.run(rootSaga);
    
    return store;
};   
