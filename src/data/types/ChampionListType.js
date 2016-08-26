import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import JsonType from 'graphql-type-json';
import ChampionType from './ChampionType';

const ChampionListType = new ObjectType({
  name: 'ChampionList',
  fields: {
    type: { type: new NonNull(StringType) },
    version: { type: new NonNull(StringType) },
    format: { type: new NonNull(StringType) },
    keys: { type: JsonType },
    data: { type: new ListType(ChampionType) },
  },
});

export default ChampionListType;
