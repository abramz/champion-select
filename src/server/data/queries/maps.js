import lolApi from '../../LolApi';
import MapsType from '../types/MapsType';

/**
 * Maps query
 * @type {{type: MapsType, args: {locale}, resolve: ((root, { locale }:{locale: *})=>MapsType)}}
 */
const maps = {
  type: MapsType,

  /**
   * Query to retrieve map information
   * GraphQL will validate the arguments for us
   * @param locale - the locale to retrieve this data for
   * @returns {MapsType}
   */
  async resolve() {
    // graphql will handle validating arguments, yay!
    try {
      const result = await lolApi.getMaps();
      result.data = Object.values(result.data);

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Unable to retrieve maps.');
    }
  },
};

export default maps;
