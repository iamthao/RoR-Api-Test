import '../../../client/stylesheets/layout.scss'
import 'bootstrap/dist/css/bootstrap.css';


import React from 'react';

//--- install redux -----------
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'

// Logger with default options
import logger from 'redux-logger'

import rootReducer from '../HelloWorld/reducers/index'

let store = createStore(rootReducer, applyMiddleware(logger));

//end redux --------------

import App from '../HelloWorld/App'



const Layout = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

export default Layout