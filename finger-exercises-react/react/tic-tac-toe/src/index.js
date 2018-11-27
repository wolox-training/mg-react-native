import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from '../node_modules/redux';

import rootReducer from './redux';
import './scss/application.scss';
import registerServiceWorker from './registerServiceWorker';
import Routs from './app/components/Routs';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable no-underscore-dangle */

ReactDOM.render(
  <Provider store={store}>
    <Routs />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
