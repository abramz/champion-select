import {
  checkId,
  checkLocale,
  getValidChampOpts,
  getValidItemListOpts,
  getValidItemOpts,
} from './validators';
import { makeFetch } from './utils';
import { api } from './constants';

function doAllTheWork(type, args) {
  let query = '';
  let route = type.route;
  const id = args && args.id ? args.id : null;
  const options = args && args.options ? args.options : null;
  const locale = args && args.locale ? args.locale : null;

  if (!type) {
    throw Error('A type must be provided.');
  }

  if (type.checkId) {
    checkId(id);
  }

  if (type.checkLocale) {
    checkLocale(locale);
  }

  if (type.getOpts) {
    let optString;
    if (type.getOpts === 'champData') {
      optString = getValidChampOpts(options);
    } else if (type.getOpts === 'itemData') {
      optString = getValidItemOpts(options);
    } else if (type.getOpts === 'itemListData') {
      optString = getValidItemListOpts(options);
    } else {
      throw new Error(`Unknown options parameter, ${type.getOpts}.`);
    }
    query = `${type.getOpts}=${optString}`;
  }

  if (id) {
    route = `${route}/${id}`;
  }

  return makeFetch(route, locale, query);
}

class LolApi {
  getChampion(args) {
    return doAllTheWork(api.champion, args);
  }

  getChampions(args) {
    return doAllTheWork(api.champions, args);
  }

  getItem(args) {
    return doAllTheWork(api.item, args);
  }

  getItems(args) {
    return doAllTheWork(api.items, args);
  }

  getLanguageStrings(args) {
    return doAllTheWork(api.languageStrings, args);
  }

  getLanguages(args) {
    return doAllTheWork(api.languages, args);
  }

  getMaps(args) {
    return doAllTheWork(api.maps, args);
  }

  getServer(args) {
    return doAllTheWork(api.server, args);
  }
}

export default LolApi;
