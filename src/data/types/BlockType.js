import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import BlockItemType from './BlockItemType';

const BlockType = new ObjectType({
  name: 'Block',
  fields: {
    items: { type: new ListType(BlockItemType) },
    recMath: { type: new NonNull(BoolType) },
    type: { type: new NonNull(StringType) },
  },
});

export default BlockType;
