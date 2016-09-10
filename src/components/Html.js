import React, { PropTypes } from 'react';
import { analytics } from '../config';

function Html({ title, description, language, style, script, children, initialState }) {
  return (
    <html className="no-js" lang={language}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,300,500&amp;subset=latin" media="all" />
        <style id="css" dangerouslySetInnerHTML={{ __html: style }} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_STATE__=${JSON.stringify(initialState)}`,
          }}
        />
        {script && <script src={script} />}
        {analytics.google.trackingId &&
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')`,
            }}
          />
        }
        {analytics.google.trackingId &&
          <script src="https://www.google-analytics.com/analytics.js" async defer />
        }
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  script: PropTypes.string,
  children: PropTypes.string,
  initialState: PropTypes.object,
};

export default Html;
