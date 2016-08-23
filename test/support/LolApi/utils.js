import championSuccess from './championSuccess';
import requestError from './requestError';

export default {
  stripApiKey: {
    negativeTests: [
      '',
      ' ',
      'api',
      'apikey',
      'api_key',
      'api_key=',
      'api_key=&',
      '?',
      '? ',
      '?api',
      '?apikey',
      '?api_key',
      '?api_key=',
      '?api_key=&',
    ],
  },
  makeFetch: {
    championSuccess,
    requestError,
  },
};
