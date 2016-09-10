import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import content from './queries/content';
import champion from './queries/champion';
import champions from './queries/champions';
import item from './queries/item';
import items from './queries/items';
import languages from './queries/languages';
import languageStrings from './queries/languageStrings';
import maps from './queries/maps';
import server from './queries/server';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      content,
      champion,
      champions,
      item,
      items,
      languages,
      languageStrings,
      maps,
      server,
    },
  }),
});

export default schema;
