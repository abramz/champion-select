import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const InfoType = new ObjectType({
  name: 'Info',
  fields: {
    attack: { type: new NonNull(IntType) },
    defense: { type: new NonNull(IntType) },
    difficulty: { type: new NonNull(IntType) },
    magic: { type: new NonNull(IntType) },
  },
});

export default InfoType;
