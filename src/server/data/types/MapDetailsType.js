import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import ImageType from './ImageType';

const MapDetailsType = new ObjectType({
  name: 'MapDetails',
  fields: {
    mapId: { type: new NonNull(IntType) },
    mapName: { type: new NonNull(StringType) },
    image: { type: ImageType },
    unpurchasableItemList: { type: new ListType(new NonNull(IntType)) },
  },
});

export default MapDetailsType;
