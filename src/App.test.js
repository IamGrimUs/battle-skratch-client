import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('root');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
