import LolApi from '../../LolApi';
import ChampionListType from '../types/ChampionListType';
import {
  localeType,
  optsType,
} from './constants';

/**
 * Champion List Query
 * @type {{type: ChampionListType, args: {locale, opts}, resolve: ((root, { locale, opts }:{locale: *, opts: *}))}}
 */
const champions = {
  type: ChampionListType,
  args: {
    locale: localeType,
    opts: optsType,
  },

  /**
   * How to retrieve a specific champion by id
   * GraphQL will validate the arguments for us
   * @param root - arguments passed to each request by the server
   * @param id - the id of the champion to retrieve
   * @param locale - the locale to retrieve this data for
   * @returns {ChampionListType}
   */
  async resolve(root, { locale, opts }) {
    try {
      const lolApi = new LolApi();
      const result = lolApi.getChampions({ locale, opts });
      result.data = Object.values(result.data);

      return result;
    } catch (error) {
      console.log(locale, opts, error);
      throw new Error('Unable to retrieve champions.');
    }
  },
};

export default champions;
