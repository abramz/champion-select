import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import BlockType from './BlockType';

const RecommendedType = new ObjectType({
  name: 'Recommended',
  fields: {
    blocks: { type: new ListType(BlockType) },
    champion: { type: new NonNull(StringType) },
    map: { type: new NonNull(StringType) },
    mode: { type: new NonNull(StringType) },
    priority: { type: new NonNull(BoolType) },
    title: { type: new NonNull(StringType) },
    type: { type: new NonNull(StringType) },
  },
});

export default RecommendedType;
