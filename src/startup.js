import 'babel-polyfill';
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import getConfig from './server/config';
import {
  api,
  render,
  error,
} from './server/middleware';
import { port } from './server/constants';

async function startup() {
  try {
    // get configuration from Riot
    const config = await getConfig();

    const app = express();

    //
    // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
    // user agent is not known.
    // -----------------------------------------------------------------------------
    global.navigator = global.navigator || {};
    global.navigator.userAgent = global.navigator.userAgent || 'all';

    //
    // Register Node.js middleware
    // -----------------------------------------------------------------------------
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //
    // Register API middleware
    // -----------------------------------------------------------------------------
    app.use('/graphql', api());

    //
    // Register server-side rendering middleware
    // -----------------------------------------------------------------------------
    app.use('*', render(config));

    //
    // Error handling
    // -----------------------------------------------------------------------------
    app.use(error());

    app.listen(port, () => {
      console.log(`The server is running at http://localhost:${port}/`);
    });
  } catch (err) {
    console.error(err);
    throw new Error('Unable to start the app');
  }
}

//
// Launch the app
startup();
