import LolApi from '../../LolApi';
import ItemListType from '../types/ItemListType';
import {
  localeType,
  optsType,
} from './constants';

const items = {
  type: ItemListType,
  args: {
    locale: localeType,
    opts: optsType,
  },
  async resolve(root, { locale, opts }) {
    // graphql will handle validating arguments, yay!
    try {
      const lolApi = new LolApi();
      const result = await lolApi.getItems({ locale, opts });
      result.data = Object.values(result.data);

      return result;
    } catch (error) {
      console.log(locale, opts, error);
      throw new Error('Unable to retrieve items.');
    }
  },
};

export default items;
