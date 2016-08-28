import { connect } from 'react-redux';
import ChampionList from '../components/ChampionList';

const getVisibleChampions = (champions, search, filters) => (
  champions
    .filter((champion) => {
      // if we have a search term, and it does not match the begining of a champions name, return false (omit this champ)
      if (search && search.length > 0 && !champion.name.toLowerCase().startsWith(search.toLowerCase())) {
        return false;
      }

      if (filters && filters.length > 0) {
        for (let i = filters.length - 1; i >= 0; i--) {
          // break early, if 1 tag matches that is good enough
          if (champion.tags.indexOf(filters[i]) > -1) {
            return true;
          }
        }

        // if we get here, the champion doesn't have any tags that match our active filters
        return false;
      }

      // by default we show champion
      return true;
    })
    .sort((a, b) => {
      const keyA = a.key.toUpperCase();
      const keyB = b.key.toUpperCase();

      if (keyA < keyB) {
        return -1;
      }

      if (keyA > keyB) {
        return 1;
      }

      return 0;
    })
);

const mapStateToProps = ({ championSearch, championFilters }, { champions, version }) => ({
  version,
  champions: getVisibleChampions(champions, championSearch, championFilters),
});

const VisibleChampionList = connect(mapStateToProps)(ChampionList);
export default VisibleChampionList;
