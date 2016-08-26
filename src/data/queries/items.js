import LolApi from '../../LolApi';
import ItemListType from '../types/ItemListType';
import {
  localeType,
  optionsType,
} from './constants';

/**
 * Items query
 * @type {{type: ItemListType, args: {locale, options}, resolve: ((root, { locale, options }:{locale: *, options: *})=>ItemListType)}}
 */
const items = {
  type: ItemListType,
  args: {
    locale: localeType,
    options: optionsType,
  },

  /**
   * How to retrieve a all the items
   * GraphQL will validate the arguments for us
   * @param root - arguments passed to each request by the server
   * @param locale - the locale to retrieve this data for
   * @param options - what fields are we looking for
   * @returns {ItemListType}
   */
  async resolve(root, { locale, options }) {
    // graphql will handle validating arguments, yay!
    try {
      const lolApi = new LolApi();
      const result = await lolApi.getItems({ locale, options });
      result.data = Object.values(result.data);

      return result;
    } catch (error) {
      console.log(locale, options, error);
      throw new Error('Unable to retrieve items.');
    }
  },
};

export default items;
