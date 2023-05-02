import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { setupStore } from './redux/store';
import { Provider } from 'react-redux';
import './index.css';

const storeSSR = setupStore();

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={storeSSR}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
