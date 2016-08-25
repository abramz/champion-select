import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const ItemTreeType = new ObjectType({
  name: 'ItemTree',
  fields: {
    header: { type: new NonNull(StringType) },
    tags: { type: new ListType(StringType) },
  },
});

export default ItemTreeType;
