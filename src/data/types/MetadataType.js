import {
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const MetadataType = new ObjectType({
  name: 'Metadata',
  fields: {
    isRune: { type: new NonNull(BoolType) },
    tier: { type: new NonNull(StringType) },
    type: { type: new NonNull(StringType) },
  },
});

export default MetadataType;
