import React from 'react';
import ReactDOM from 'react-dom';
import '@app/common.css';
import { App } from '@app/components/App/App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@app/store';

const setupStore = store();

ReactDOM.render(
  <Provider store={setupStore}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
