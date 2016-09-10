import React from 'react';
import ReactDOM from 'react-dom/server';
import UniversalRouter from 'universal-router';
import routes from '../../routes';
import configureStore from '../../store/configureStore';
import { setRuntimeVariable } from '../../actions/runtime';
import assets from './assets'; // eslint-disable-line import/no-unresolved

// components
import { Provider } from 'react-redux';
import Html from '../../components/Html';

function render(config) {
  return async (req, res, next) => {
    try {
      let css = new Set();
      let statusCode = 200;
      const data = {
        title: '',
        description: '',
        language: config.defaultLang,
        style: '',
        script: assets.main.js,
        children: '',
      };

      // get the initial state
      const store = configureStore({});
      store.dispatch(setRuntimeVariable('cdnUrl', config.cdnUrl));

      await UniversalRouter.resolve(routes, {
        path: req.path,
        query: req.query,
        context: {
          insertCss: (...styles) => {
            styles.forEach(style => css.add(style._getCss())); // eslint-disable-line no-underscore-dangle, max-len
          },
          setTitle: value => (data.title = value),
          setMeta: (key, value) => (data[key] = value),
        },
        render(component, status = 200) {
          css = new Set();
          statusCode = status;
          data.children = ReactDOM.renderToString(<Provider store={store}>{component}</Provider>);
          data.style = [...css].join('');
          return true;
        },
      });

      // get the "initial" state of our store (after configuration)
      data.initialState = store.getState();

      const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);

      res.status(statusCode);
      res.send(`<!doctype html>${html}`);
    } catch (err) {
      next(err);
    }
  };
}

export default render;
