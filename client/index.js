import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';
import './assets/styles/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css';

render(
  // wrap the App in the Provider and connect with store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
