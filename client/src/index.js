import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import App from './App';
// import store from './app/store';
import { Provider } from 'react-redux';
import store from './store';

const container = document.getElementById('app');
const app = createRoot(container);

app.render(
        <Provider store = {store}>
           <App />
        </Provider>);
