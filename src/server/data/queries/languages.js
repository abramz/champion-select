import lolApi from '../../LolApi';
import LanguagesType from '../types/LanguagesType';

/**
 * Languages query
 * @type {{type: LanguagesType, resolve: (()=>LanguagesType)}}
 */
const languages = {
  type: LanguagesType,
  /**
   * How to retrieve available languages
   * @returns {LanguagesType}
   */
  async resolve() {
    try {
      return await lolApi.getLanguages();
    } catch (error) {
      console.log(error);
      throw new Error('Unable to retrieve languages.');
    }
  },
};

export default languages;
