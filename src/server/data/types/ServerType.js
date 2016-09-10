import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import JsonType from 'graphql-type-json';

const ServerType = new ObjectType({
  name: 'Realm',
  fields: {
    cdn: { type: new NonNull(StringType) },
    css: { type: new NonNull(StringType) },
    dd: { type: new NonNull(StringType) },
    l: { type: new NonNull(StringType) },
    lg: { type: new NonNull(StringType) },
    n: { type: new ListType(JsonType) },
    profileiconmax: { type: new NonNull(IntType) },
    store: { type: new NonNull(StringType) },
    v: { type: new NonNull(StringType) },
  },
});

export default ServerType;
