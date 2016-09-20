import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from '../../components/Html';
import { ErrorPage } from '../../routes/error/ErrorPage';
import errorPageStyle from '../../routes/error/ErrorPage.css';
import PrettyError from 'pretty-error';

function error() {
  const pe = new PrettyError();
  pe.skipNodeFiles();
  pe.skipPackage('express');

  return (err, req, res, next) => { // eslint-disable-line no-unused-vars
    console.error(pe.render(err));
    const statusCode = err.status || 500;
    const html = ReactDOM.renderToStaticMarkup(
      <Html
        title="Internal Server Error"
        description={err.message}
        style={errorPageStyle._getCss()} // eslint-disable-line no-underscore-dangle
      >
        {ReactDOM.renderToString(<ErrorPage error={err} />)}
      </Html>
    );
    res.status(statusCode);
    res.send(`<!doctype html>${html}`);
  };
}

export default error;
