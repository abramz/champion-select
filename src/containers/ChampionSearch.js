import { connect } from 'react-redux';
import { setChampionSearch } from '../actions/champions';

export const mapStateToProps = ({ championSearch }, { className, placeholder, type }) => ({
  className,
  placeholder,
  type,
  autoFocus: true,
  value: championSearch,
});

export const mapDispatchToProps = (dispatch) => ({
  /**
   * dispatch the setChampionSearch action with the input value
   * @param event
   */
  onChange(event) {
    dispatch(setChampionSearch(event.target.value));
  },
});

const ChampionSearch = connect(mapStateToProps, mapDispatchToProps)('input');

export default ChampionSearch;
