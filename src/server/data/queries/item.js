import lolApi from '../../LolApi';
import ItemType from '../types/ItemType';
import {
  idType,
  optionsType,
} from '../types/constants';

/**
 * Item Query
 * @type {{type: ItemType, args: {id, locale, options}, resolve: ((root, { id, locale, options }:{id: *, locale: *, options: *})=>ItemType)}}
 */
const item = {
  type: ItemType,
  args: {
    id: idType,
    options: optionsType,
  },

  /**
   * How to retrieve a specific iconItem by id
   * GraphQL will validate the arguments for us
   * @param root - arguments passed to each request by the server
   * @param id - the id of the iconItem to retrieve
   * @param locale - the locale to retrieve this data for
   * @param options - what fields are we looking for
   * @returns {ItemType}
   */
  async resolve(root, { id, options }) {
    // graphql will handle validating arguments, yay!
    try {
      return await lolApi.getItem({ id, options });
    } catch (error) {
      console.log(id, options, error);
      throw new Error(`Unable to retrieve item id: "${id}".`);
    }
  },
};

export default item;
