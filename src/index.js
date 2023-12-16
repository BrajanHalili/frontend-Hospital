import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import store from './context/AppointmentStore'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);