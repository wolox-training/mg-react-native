import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose } from '../node_modules/redux';

import rootReducer from './redux';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

import App from '~components/App'; // eslint-disable-line import/first
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable no-underscore-dangle */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
