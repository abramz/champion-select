import 'babel-polyfill';

import chai, { should } from 'chai';
import sinonChai from 'sinon-chai';
import 'sinon-as-promised';

/* configure chai to use 'should' syntax and chain off of sinon constructs */
should();
chai.use(sinonChai);


function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.md'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.jpeg'] = noop;
require.extensions['.gif'] = noop;
