import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

// components
import View from 'react-flexbox';

// containers
import VisibleChampionList from '../../containers/VisibleChampionList';
import ChampionTag from '../../containers/ChampionTag';
import ChampionSearch from '../../containers/ChampionSearch';

const title = 'Champion Select';
const filters = ['Assassin', 'Fighter', 'Mage', 'Support', 'Tank', 'Marksman'];
function Home({ data }, context) {
  context.setTitle(title);

  const champions = data.data;
  const version = data.version;

  const championSearchContainerFlex = {
    justifyContent: 'center',
    alignItems: 'center',
  };

  const championFiltersContainerFlex = {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  return (
    <div className={s.root}>
      <div className={s.container}>
        <View column>
          <h3>Welcome summoner, select your champion.</h3>
          <View className={s.championSearchContainer} style={championSearchContainerFlex}>
            <ChampionSearch className={s.championSearch} type="text" placeholder="Teemo..." />
          </View>
          <View className={s.championFiltersContainer} style={championFiltersContainerFlex}>
            {
              filters.map((filter, index) => (
                <ChampionTag key={index} filter={filter} className={s.filter} />
              ))
            }
          </View>
          <VisibleChampionList champions={champions} version={version} />
        </View>
      </div>
    </div>
  );
}

Home.propTypes = { data: PropTypes.object };
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
