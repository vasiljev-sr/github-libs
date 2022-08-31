import React from 'react';
import ReactDOM from 'react-dom';
import '@app/common.css';
import { App } from '@app/components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@app/store';

const setupStore = store();

ReactDOM.render(
  <Provider store={setupStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
