import LolApi from '../../LolApi';
import ChampionType from '../types/ChampionType';
import {
  idType,
  localeType,
  optionsType,
} from './constants';

/**
 * Champion Query
 * @type {{type: ChampionType, args: {id, locale, options}, resolve: ((root, { id, locale, options }:{id: *, locale: *, options: *}))}}
 */
const champion = {
  type: ChampionType,
  args: {
    id: idType,
    locale: localeType,
    options: optionsType,
  },

  /**
   * How to retrieve a specific champion by id
   * GraphQL will validate the arguments for us
   * @param root - arguments passed to each request by the server
   * @param id - the id of the champion to retrieve
   * @param locale - the locale to retrieve this data for
   * @param options - what fields are we looking for
   * @returns {ChampionType}
   */
  async resolve(root, { id, locale, options }) {
    try {
      const lolApi = new LolApi();
      return await lolApi.getChampion({ id, locale, options });
    } catch (error) {
      console.log(id, locale, options, error);
      throw new Error('Unable to retrieve champion id: "${id}".');
    }
  },
};

export default champion;
