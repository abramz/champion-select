import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLFloat as FloatType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import JsonType from 'graphql-type-json';
import ImageType from './ImageType';
import LevelTipType from './LevelTipType';
import SpellVarsType from './SpellVarsType';

const ChampionSpellType = new ObjectType({
  name: 'ChampionSpell',
  fields: {
    altimages: { type: new ListType(ImageType) },
    cooldown: { type: new ListType(FloatType) },
    cooldownBurn: { type: new NonNull(StringType) },
    cost: { type: new ListType(IntType) },
    costBurn: { type: new NonNull(StringType) },
    costType: { type: new NonNull(StringType) },
    description: { type: new NonNull(StringType) },
    effect: { type: new ListType(new ListType(FloatType)) },
    effectBurn: { type: new ListType(StringType) },
    image: { type: ImageType },
    key: { type: new NonNull(StringType) },
    leveltip: { type: LevelTipType },
    maxrank: { type: new NonNull(IntType) },
    name: { type: new NonNull(StringType) },
    range: { type: JsonType },
    rangeBurn: { type: new NonNull(StringType) },
    resource: { type: new NonNull(StringType) },
    sanitizedDescription: { type: new NonNull(StringType) },
    sanitizedTooltip: { type: new NonNull(StringType) },
    tooltip: { type: new NonNull(StringType) },
    vars: { type: new ListType(SpellVarsType) },
    rangeString: { type: StringType },
    rangeList: { type: new ListType(IntType) },
  },
});

export default ChampionSpellType;
