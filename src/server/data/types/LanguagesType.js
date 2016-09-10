import {
  GraphQLList as ListType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const RealmType = new ListType(new NonNull(StringType));

export default RealmType;
