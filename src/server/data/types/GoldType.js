import {
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as BoolType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const MetadataType = new ObjectType({
  name: 'Gold',
  fields: {
    base: { type: new NonNull(IntType) },
    purchasable: { type: new NonNull(BoolType) },
    sell: { type: new NonNull(IntType) },
    total: { type: new NonNull(IntType) },
  },
});

export default MetadataType;
