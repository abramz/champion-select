import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const BlockItemType = new ObjectType({
  name: 'BlockItem',
  fields: {
    id: { type: new NonNull(IntType) },
    count: { type: new NonNull(IntType) },
  },
});

export default BlockItemType;
