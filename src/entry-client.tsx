import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { hydrateRoot } from 'react-dom/client';

import './index.css';
import { createStore } from '@reduxjs/toolkit';

const preloadedState = window.__PRELOADED_STATE__;

const storeForSSR = createStore(store.reducer, preloadedState);

ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement,
  <Provider store={storeForSSR}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
