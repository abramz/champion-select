import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const ImageType = new ObjectType({
  name: 'Image',
  fields: {
    full: { type: new NonNull(StringType) },
    group: { type: new NonNull(StringType) },
    sprite: { type: new NonNull(StringType) },
    h: { type: new NonNull(IntType) },
    w: { type: new NonNull(IntType) },
    x: { type: new NonNull(IntType) },
    y: { type: new NonNull(IntType) },
  },
});

export default ImageType;
