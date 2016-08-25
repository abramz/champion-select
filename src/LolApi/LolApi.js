import {
  checkId,
  checkLocale,
  checkVersion,
  getValidChampOpts,
  getValidItemListOpts,
  getValidItemOpts,
} from './validators';
import { makeFetch } from './utils';
import { api } from './constants';

class LolApi {
  constructor() {
    // this is a promise that we have to await later
    this.serverPromise = this.get(api.server);
  }

  getChampion(args) {
    return this.get(api.champion, args);
  }

  getChampions(args) {
    return this.get(api.champions, args);
  }

  getItem(args) {
    return this.get(api.item, args);
  }

  getItems(args) {
    return this.get(api.items, args);
  }

  getLanguageStrings(args) {
    return this.get(api.languageStrings, args);
  }

  getLanguages(args) {
    return this.get(api.languages, args);
  }

  getMaps(args) {
    return this.get(api.maps, args);
  }

  getServer() {
    return this.serverPromise;
  }

  // private
  async get(type, args) {
    let version;
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

    if (type.checkVersion) {
      // only await if we actually need it
      // if api.server gets misconfigured such that it checkVersion == true then this would await on itself.
      const server = await this.serverPromise;
      version = server.n[type.route];
      checkVersion(version);
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

    return makeFetch(route, locale, version, query);
  }
}

export default LolApi;
