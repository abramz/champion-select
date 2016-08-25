import {
  GraphQLList as ListType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

export const idType = { type: new NonNull(StringType) };
export const localeType = { type: new NonNull(StringType) };
export const optsType = { type: new ListType(StringType) };
