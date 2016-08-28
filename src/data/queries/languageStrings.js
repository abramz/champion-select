import LolApi from '../../LolApi';
import LanguageStringsType from '../types/LanguageStringsType';
import { localeType } from '../types/constants';

/**
 * Language strings query
 * @type {{type: LanguageStringsType, args: {locale}, resolve: ((root, { locale }:{locale: *})=>LanguageStringsType)}}
 */
const languageStrings = {
  type: LanguageStringsType,
  args: { locale: localeType },

  /**
   * Query to retrieve a all the localized strings
   * GraphQL will validate the arguments for us
   * @param locale - the locale to retrieve this data for
   * @returns {LanguageStringsType}
   */
  async resolve(root, { locale }) {
    // graphql will handle validating arguments, yay!
    try {
      const lolApi = new LolApi();
      return await lolApi.getLanguageStrings({ locale });
    } catch (error) {
      console.log(locale, error);
      throw new Error('Unable to retrieve language strings.');
    }
  },
};

export default languageStrings;
