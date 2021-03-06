import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import {
  brandTitle,
  welcomeText,
  championFilterKeys,
  searchPlaceholder,
} from '../../constants';

// components
import View from 'react-flexbox';

// containers
import VisibleChampionList from '../../containers/VisibleChampionList';
import ChampionTag from '../../containers/ChampionTag';
import ChampionSearch from '../../containers/ChampionSearch';

function Home({ data }, context) {
  context.setTitle(brandTitle);

  const champions = data.data;

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
          <h3>{welcomeText}</h3>
          <View className={s.championSearchContainer} style={championSearchContainerFlex}>
            <ChampionSearch className={s.championSearch} type="text" placeholder={searchPlaceholder} />
          </View>
          <View className={s.championFiltersContainer} style={championFiltersContainerFlex}>
            {
              championFilterKeys.map((filter, index) => (
                <ChampionTag key={index} filter={filter} className={s.filter} />
              ))
            }
          </View>
          <VisibleChampionList champions={champions} />
        </View>
      </div>
    </div>
  );
}

Home.propTypes = { data: PropTypes.object };
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
