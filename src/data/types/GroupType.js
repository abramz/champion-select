import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const GroupType = new ObjectType({
  name: 'Group',
  fields: {
    MaxGroupOwnable: { type: new NonNull(StringType) },
    key: { type: new NonNull(StringType) },
  },
});

export default GroupType;
