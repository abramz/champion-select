import LolApi from '../../LolApi';
import ItemType from '../types/ItemType';
import {
  idType,
  localeType,
  optionsType,
} from './constants';

/**
 * Item Query
 * @type {{type: ItemType, args: {id, locale, options}, resolve: ((root, { id, locale, options }:{id: *, locale: *, options: *})=>ItemType)}}
 */
const item = {
  type: ItemType,
  args: {
    id: idType,
    locale: localeType,
    options: optionsType,
  },

  /**
   * How to retrieve a specific item by id
   * GraphQL will validate the arguments for us
   * @param root - arguments passed to each request by the server
   * @param id - the id of the item to retrieve
   * @param locale - the locale to retrieve this data for
   * @param options - what fields are we looking for
   * @returns {ItemType}
   */
  async resolve(root, { id, locale, options }) {
    // graphql will handle validating arguments, yay!
    try {
      const lolApi = new LolApi();
      return await lolApi.getItem({ id, locale, options });
    } catch (error) {
      console.log(id, locale, options, error);
      throw new Error('Unable to retrieve item id: "${id}".');
    }
  },
};

export default item;
