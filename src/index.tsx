import React from 'react';
import ReactDOM from 'react-dom';
import '@app/common.css';
import { App } from '@app/components/App/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
