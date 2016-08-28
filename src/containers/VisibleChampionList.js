import { connect } from 'react-redux';
import ChampionList from '../components/ChampionList';

/**
 * Return a list of champions sorted by key alphabetically and filtered by the search term and tags
 * @param champions - all the champions we could display
 * @param search - the search term  to use, we return any champion that starts with the term if it is provided
 * @param tags - the tags to filter by, we return any champions that have a tag that matches one of the ones provided
 */
const getVisibleChampions = (champions, search, tags) => (
  champions

  /**
   * filter the champions by the search term and tags
   */
    .filter((champion) => {
      // if we have a search term, and it does not match the begining of a champions name, return false (omit this champ)
      if (search && search.length > 0 && !champion.name.toLowerCase().startsWith(search.toLowerCase())) {
        return false;
      }

      if (tags && tags.length > 0) {
        for (let i = tags.length - 1; i >= 0; i--) {
          // break early, if 1 tag matches that is good enough
          if (champion.tags.indexOf(tags[i]) > -1) {
            return true;
          }
        }

        // if we get here, the champion doesn't have any tags that match our active tags
        return false;
      }

      // by default we show champion
      return true;
    })

    /**
     * Sort the list of champions by key while ignoring case
     */
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

const mapStateToProps = ({ championSearch, championTags }, { champions, version }) => ({
  /**
   * The version of League of Legends we are working with
   */
  version,
  /**
   * The list of champions to display based on the search term and filters
   */
  champions: getVisibleChampions(champions, championSearch, championTags),
});

const VisibleChampionList = connect(mapStateToProps)(ChampionList);
export default VisibleChampionList;
