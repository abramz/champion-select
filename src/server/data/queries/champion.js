import lolApi from '../../LolApi';
import ChampionType from '../types/ChampionType';
import {
  keyType,
  optionsType,
} from '../types/constants';

/**
 * Champion Query
 * @type {{type: ChampionType, args: {id, locale, options}, resolve: ((root, { id, locale, options }:{id: *, locale: *, options: *}))}}
 */
const champion = {
  type: ChampionType,
  args: {
    key: keyType,
    options: optionsType,
  },

  /**
   * How to retrieve a specific champion by id
   * GraphQL will validate the arguments for us
   * @param root - arguments passed to each request by the server
   * @param key - the key of the champion to retrieve
   * @param locale - the locale to retrieve this data for
   * @param options - what fields are we looking for
   * @returns {ChampionType}
   */
  async resolve(root, { key, options }) {
    try {
      return await lolApi.getChampionByKey({ key, options });
    } catch (error) {
      console.log(key, options, error);
      throw new Error(`Unable to retrieve champion key: "${key}".`);
    }
  },
};

export default champion;
