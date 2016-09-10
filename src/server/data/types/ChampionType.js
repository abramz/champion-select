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
    allytips: { type: new ListType(StringType) },
    blurb: { type: new NonNull(StringType) },
    enemytips: { type: new ListType(StringType) },
    id: { type: new NonNull(IntType) },
    image: { type: ImageType },
    info: { type: InfoType },
    key: { type: new NonNull(StringType) },
    lore: { type: new NonNull(StringType) },
    name: { type: new NonNull(StringType) },
    partype: { type: new NonNull(StringType) },
    passive: { type: PassiveType },
    recommended: { type: new ListType(RecommendedType) },
    skins: { type: new ListType(SkinType) },
    spells: { type: new ListType(ChampionSpellType) },
    stats: { type: StatsType },
    tags: { type: new ListType(StringType) },
    title: { type: new NonNull(StringType) },
  },
});

export default ChampionType;
