import {
  GraphQLInt as IntType,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const SkinType = new ObjectType({
  name: 'Skin',
  fields: {
    id: { type: new NonNull(IntType) },
    name: { type: new NonNull(StringType) },
    num: { type: new NonNull(IntType) },
  },
});

export default SkinType;
