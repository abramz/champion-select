import lolApi from '../../LolApi';
import ServerType from '../types/ServerType';

/**
 * Server query
 * @type {{type, resolve: (()=>LanguageStringsType)}}
 */
const server = {
  type: ServerType,

  /**
   * Query to retrieve server information
   * GraphQL will validate the arguments for us
   * @returns {LanguageStringsType}
   */
  async resolve() {
    // graphql will handle validating arguments, yay!
    try {
      return await lolApi.getServer();
    } catch (error) {
      console.log(error);
      throw new Error('Unable to retrieve server.');
    }
  },
};

export default server;
