import LolApi from '../../LolApi';
import MapsType from '../types/MapsType';
import {
  localeType,
} from './constants';

/**
 * Maps query
 * @type {{type: MapsType, args: {locale}, resolve: ((root, { locale }:{locale: *})=>MapsType)}}
 */
const maps = {
  type: MapsType,
  args: { locale: localeType },

  /**
   * Query to retrieve map information
   * GraphQL will validate the arguments for us
   * @param locale - the locale to retrieve this data for
   * @returns {MapsType}
   */
  async resolve(root, { locale }) {
    // graphql will handle validating arguments, yay!
    try {
      const lolApi = new LolApi();
      const result = await lolApi.getMaps({ locale });
      result.data = Object.values(result.data);

      return result;
    } catch (error) {
      console.log(locale, error);
      throw new Error('Unable to retrieve maps.');
    }
  },
};

export default maps;
