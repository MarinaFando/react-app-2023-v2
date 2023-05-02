import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { setupStore } from './redux/store';
import { Provider } from 'react-redux';

const storeSSR = setupStore();

export function render(url, opts) {
  return renderToPipeableStream(
    <Provider store={storeSSR}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
}
