import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import JsonType from 'graphql-type-json';

const LanguageStringsType = new ObjectType({
  name: 'LanguageStrings',
  fields: {
    type: { type: new NonNull(StringType) },
    version: { type: new NonNull(StringType) },
    data: { type: JsonType },
  },
});

export default LanguageStringsType;
