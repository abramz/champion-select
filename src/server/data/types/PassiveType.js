import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import ImageType from './ImageType';

const PassiveType = new ObjectType({
  name: 'Passive',
  fields: {
    description: { type: new NonNull(StringType) },
    image: { type: ImageType },
    name: { type: new NonNull(StringType) },
    sanitizedDescription: { type: new NonNull(StringType) },
  },
});

export default PassiveType;
