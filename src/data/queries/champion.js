import LolApi from '../../LolApi';
import ChampionType from '../types/ChampionType';
import {
  idType,
  localeType,
  optsType,
} from './constants';

/**
 * Champion Query
 * @type {{type: ChampionType, args: {id, locale, opts}, resolve: ((root, { id, locale, opts }:{id: *, locale: *, opts: *}))}}
 */
const champion = {
  type: ChampionType,
  args: {
    id: idType,
    locale: localeType,
    opts: optsType,
  },

  /**
   * How to retrieve a specific champion by id
   * GraphQL will validate the arguments for us
   * @param root - arguments passed to each request by the server
   * @param id - the id of the champion to retrieve
   * @param locale - the locale to retrieve this data for
   * @param opts - what fields are we looking for
   * @returns {ChampionType}
   */
  async resolve(root, { id, locale, opts }) {
    try {
      const lolApi = new LolApi();
      return await lolApi.getChampion({ id, locale, opts });
    } catch (error) {
      console.log(id, locale, opts, error);
      throw new Error('Unable to retrieve champion id: "${id}".');
    }
  },
};

export default champion;
