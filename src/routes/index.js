import React from 'react';
import App from '../components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';

// Child routes
import home from './home';
import content from './content';
import error from './error';

export default {

  path: '/',

  // keep in mind, routes are evaluated in order
  children: [
    home,

    // place new routes before...
    content,
    error,
  ],

  async action({ next, render, context }) {
    const component = await next();
    if (component === undefined) return component;

    const store = createStore(reducers, applyMiddleware(logger()));

    return render(
      <Provider store={store}>
        <App context={context}>{component}</App>
      </Provider>
    );
  },

};
