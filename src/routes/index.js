import React from 'react';

// Child routes
import home from './home';
import content from './content';
import error from './error';

// components
import App from '../components/App';

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

    return render(<App context={context}>{component}</App>);
  },

};
