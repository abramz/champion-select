import {
  checkId,
  checkLocale,
  getValidChampOpts,
  getValidItemListOpts,
  getValidItemOpts,
} from './validators';
import { makeFetch } from './utils';

class LolApi {
  getChampion({ id, options, locale }) {
    checkId(id);
    checkLocale(locale);
    const optString = getValidChampOpts(options);
    return makeFetch(`champion/${id}`, locale, `champData=${optString}`);
  }

  getChampions({ options, locale }) {
    checkLocale(locale);
    const optString = getValidChampOpts(options);
    return makeFetch('champion', locale, `champListData=${optString}`);
  }

  getItem({ id, options, locale }) {
    checkId(id);
    checkLocale(locale);
    const optString = getValidItemOpts(options);
    return makeFetch(`item/${id}`, locale, `itemData=${optString}`);
  }

  getItems({ options, locale }) {
    checkLocale(locale);
    const optString = getValidItemListOpts(options);
    return makeFetch('item', locale, `itemListData=${optString}`);
  }

  getLanguageStrings({ locale }) {
    checkLocale(locale);
    return makeFetch('language-strings', locale);
  }

  getLanguages() {
    return makeFetch('languages');
  }

  getMaps({ locale }) {
    checkLocale(locale);
    return makeFetch('map', locale);
  }

  getServer() {
    return makeFetch('realm');
  }
}

export default LolApi;
