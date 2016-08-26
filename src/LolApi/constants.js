if (process.env.NODE_ENV === 'development') {
  require('dotenv').load(); // eslint-disable-line global-require
}

export const riot = {
  apiKey: process.env.RIOT_API_KEY || 'X',
  baseUrl: 'https://global.api.pvp.net/api/lol/static-data',
  apiVersion: 'v1.2',
  region: process.env.RIOT_REGION || 'na',
  champOpts: 'all,allytips,altimages,blurb,enemytips,image,info,lore,partype,passive,recommended,skins,spells,stats,tags'.split(','),
  itemOpts: 'all,colloq,consumeOnFull,consumed,depth,effect,from,gold,hideFromAll,image,inStore,into,maps,requiredChampion,sanitizedDescription,specialRecipe,stacks,stats,tags'.split(','),
  itemListOpts: 'all,colloq,consumeOnFull,consumed,depth,effect,from,gold,groups,hideFromAll,image,inStore,into,maps,requiredChampion,sanitizedDescription,specialRecipe,stacks,stats,tags,tree'.split(','),
};

export const api = {
  champion: {
    checkId: true,
    checkLocale: true,
    checkVersion: true,
    getOpts: 'champData',
    route: 'champion',
  },
  champions: {
    checkLocale: true,
    checkVersion: true,
    getOpts: 'champData',
    route: 'champion',
  },
  item: {
    checkId: true,
    checkLocale: true,
    checkVersion: true,
    getOpts: 'itemData',
    route: 'item',
  },
  items: {
    checkLocale: true,
    checkVersion: true,
    getOpts: 'itemListData',
    route: 'item',
  },
  languageStrings: {
    checkLocale: true,
    route: 'language-strings',
  },
  languages: {
    route: 'languages',
  },
  maps: {
    checkLocale: true,
    checkVersion: true,
    route: 'map',
  },
  server: {
    route: 'realm',
  },
};
