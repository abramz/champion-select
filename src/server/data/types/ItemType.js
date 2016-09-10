import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as BoolType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import JsonType from 'graphql-type-json';
import ImageType from './ImageType';
import GoldType from './GoldType';
import MetadataType from './MetadataType';
import BasicDataStatsType from './BasicDataStatsType';

const ItemType = new ObjectType({
  name: 'Item',
  fields: {
    id: { type: new NonNull(IntType) },
    name: { type: new NonNull(StringType) },
    description: { type: new NonNull(StringType) },
    sanitizedDescription: { type: new NonNull(StringType) },
    plaintext: { type: new NonNull(StringType) },
    colloq: { type: new NonNull(StringType) },
    consumeOnFull: { type: new NonNull(BoolType) },
    consumed: { type: new NonNull(BoolType) },
    depth: { type: new NonNull(IntType) },
    effect: { type: JsonType },
    from: { type: new ListType(StringType) },
    gold: { type: GoldType },
    group: { type: new NonNull(StringType) },
    hideFromAll: { type: new NonNull(BoolType) },
    image: { type: ImageType },
    inStore: { type: new NonNull(BoolType) },
    into: { type: new ListType(StringType) },
    maps: { type: JsonType },
    requiredChampion: { type: new NonNull(StringType) },
    rune: { type: MetadataType },
    specialRecipe: { type: new NonNull(IntType) },
    stacks: { type: new NonNull(IntType) },
    stats: { type: BasicDataStatsType },
    tags: { type: new ListType(StringType) },
  },
});

export default ItemType;
