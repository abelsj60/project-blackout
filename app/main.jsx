import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render (
  <Provider store={store}>
    <div><h1>Hello world!</h1></div>
  </Provider>,
  document.getElementById('app')
);
