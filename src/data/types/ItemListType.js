import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import BasicDataType from './BasicDataType';
import GroupType from './GroupType';
import ItemTreeType from './ItemTreeType';
import ItemType from './ItemType';

const ItemListType = new ObjectType({
  name: 'ItemList',
  fields: {
    type: { type: new NonNull(StringType) },
    version: { type: new NonNull(StringType) },
    data: { type: new ListType(ItemType) },
    basic: { type: BasicDataType },
    groups: { type: GroupType },
    tree: { type: ItemTreeType },
  },
});

export default ItemListType;
