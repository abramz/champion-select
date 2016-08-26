import LolApi from '../../LolApi';
import ItemType from '../types/ItemType';
import {
  idType,
  localeType,
  optsType,
} from './constants';

const item = {
  type: ItemType,
  args: {
    id: idType,
    locale: localeType,
    opts: optsType,
  },
  async resolve(root, { id, locale, opts }) {
    // graphql will handle validating arguments, yay!
    try {
      const lolApi = new LolApi();
      return await lolApi.getItem({ id, locale, opts });
    } catch (error) {
      console.log(id, locale, opts, error);
      throw new Error('Unable to retrieve item id: "${id}".');
    }
  },
};

export default item;
