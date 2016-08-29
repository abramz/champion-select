import { connect } from 'react-redux';
import { setChampionSearch } from '../actions';

const mapStateToProps = ({ championSearch }, { placeholder, type }) => ({
  placeholder,
  type,
  autoFocus: true,
  value: championSearch,
});

const mapDispatchToProps = (dispatch) => ({
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
