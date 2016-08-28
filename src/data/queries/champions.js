import LolApi from '../../LolApi';
import ChampionListType from '../types/ChampionListType';
import {
  localeType,
  optionsType,
} from '../types/constants';

/**
 * Champion List Query
 * @type {{type: ChampionListType, args: {locale, options}, resolve: ((root, { locale, options }:{locale: *, options: *}))}}
 */
const champions = {
  type: ChampionListType,
  args: {
    locale: localeType,
    options: optionsType,
  },

  /**
   * How to retrieve a all the champions
   * GraphQL will validate the arguments for us
   * @param root - arguments passed to each request by the server
   * @param locale - the locale to retrieve this data for
   * @param options - what fields are we looking for
   * @returns {ChampionListType}
   */
  async resolve(root, { locale, options }) {
    try {
      const lolApi = new LolApi();
      const result = await lolApi.getChampions({ locale, options });
      result.data = Object.values(result.data);

      return result;
    } catch (error) {
      console.log(locale, options, error);
      throw new Error('Unable to retrieve champions.');
    }
  },
};

export default champions;
