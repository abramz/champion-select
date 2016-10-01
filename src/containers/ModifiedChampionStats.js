import { connect } from 'react-redux';

// components
import ChampionStats from '../components/ChampionStats';

export const mapStateToProps = (state, { stats, energyType }) => {
  // enumerating this because I will need it to be like this when it gets more complicated
  const modifiedStats = {
    attackdamage: stats.attackdamage,
    crit: stats.crit,
    attackrange: stats.attackrange,
    attackspeed: 0.625 / (1 + stats.attackspeedoffset),
    armorpenflat: 0,
    armorpenpercent: 0,
    magicdamage: 0,
    spellpenflat: 0,
    spellpenpercent: 0,
    cooldownreduction: 0,
    hp: stats.hp,
    hpregen: stats.hpregen,
    mp: stats.mp,
    mpregen: stats.mpregen,
    armor: stats.armor,
    spellblock: stats.spellblock,
    movespeed: stats.movespeed,
  };

  return {
    energyType,
    stats: modifiedStats,
  };
};

const ModifiedChampionStats = connect(mapStateToProps)(ChampionStats);

export default ModifiedChampionStats;
