import LolApi from '../../LolApi';
import LanguageStringsType from '../types/LanguageStringsType';
import { localeType } from './constants';

const languageStrings = {
  type: LanguageStringsType,
  args: { locale: localeType },
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
