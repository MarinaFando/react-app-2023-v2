import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import store from 'redux/store';
import { createStore } from '@reduxjs/toolkit';

export function render(url, context) {
  const preloadedState = context.store.getState();
  const storeForSSR = createStore(store.reducer, preloadedState);

  return ReactDOMServer.renderToString(
    <Provider store={storeForSSR}>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
}
