import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import MapDetailsType from './MapDetailsType';

const MapsType = new ObjectType({
  name: 'Maps',
  fields: {
    type: { type: new NonNull(StringType) },
    version: { type: new NonNull(StringType) },
    data: { type: new ListType(MapDetailsType) },
  },
});

export default MapsType;
