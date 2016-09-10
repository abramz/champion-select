import lolApi from '../../LolApi';
import ItemListType from '../types/ItemListType';
import {
  optionsType,
} from '../types/constants';

/**
 * Items query
 * @type {{type: ItemListType, args: {locale, options}, resolve: ((root, { locale, options }:{locale: *, options: *})=>ItemListType)}}
 */
const items = {
  type: ItemListType,
  args: {
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
  async resolve(root, { options }) {
    // graphql will handle validating arguments, yay!
    try {
      const result = await lolApi.getItems({ options });
      result.data = Object.values(result.data);

      return result;
    } catch (error) {
      console.log(options, error);
      throw new Error('Unable to retrieve items.');
    }
  },
};

export default items;
