import {
  GraphQLList as ListType,
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import ChampionSpellType from './ChampionSpellType';
import ImageType from './ImageType';
import InfoType from './InfoType';
import PassiveType from './PassiveType';
import RecommendedType from './RecommendedType';
import SkinType from './SkinType';
import StatsType from './StatsType';

const ChampionType = new ObjectType({
  name: 'Champion',
  fields: {
    id: { type: new NonNull(IntType) },
    key: { type: new NonNull(StringType) },
    name: { type: new NonNull(StringType) },
    tags: { type: new ListType(StringType) },
    title: { type: new NonNull(StringType) },
    blurb: { type: new NonNull(StringType) },
    lore: { type: new NonNull(StringType) },
    partype: { type: new NonNull(StringType) },
    allytips: { type: new ListType(StringType) },
    enemytips: { type: new ListType(StringType) },
    image: { type: ImageType },
    info: { type: InfoType },
    stats: { type: StatsType },
    passive: { type: PassiveType },
    spells: { type: new ListType(ChampionSpellType) },
    recommended: { type: new ListType(RecommendedType) },
    skins: { type: new ListType(SkinType) },
  },
});

export default ChampionType;
