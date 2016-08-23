export const riot = {
  apiKey: process.env.RIOT_API_KEY || 'X',
  baseUrl: 'https://global.api.pvp.net/api/lol/static-data',
  version: 'v1.2',
  region: process.env.RIOT_REGION || 'na',
  champOpts: 'all,allytips,altimages,blurb,enemytips,image,info,lore,partype,passive,recommended,skins,spells,stats,tags'.split(','),
  itemOpts: 'all,colloq,consumeOnFull,consumed,depth,effect,from,gold,hideFromAll,image,inStore,into,maps,requiredChampion,sanitizedDescription,specialRecipe,stacks,stats,tags'.split(','),
  itemListOpts: 'all,colloq,consumeOnFull,consumed,depth,effect,from,gold,groups,hideFromAll,image,inStore,into,maps,requiredChampion,sanitizedDescription,specialRecipe,stacks,stats,tags,tree'.split(','),
};
