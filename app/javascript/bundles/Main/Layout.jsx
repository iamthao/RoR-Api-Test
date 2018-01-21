import "regenerator-runtime/runtime";
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import App from './App';

const store = configureStore();

const Layout = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Layout;
