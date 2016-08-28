import { connect } from 'react-redux';
import {
  setChampionSearch,
} from '../actions';
import { FormControl } from 'react-bootstrap';

const mapStateToProps = ({ championSearch }, { placeholder, type }) => ({
  placeholder,
  type,
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

const ChampionSearch = connect(mapStateToProps, mapDispatchToProps)(FormControl);

export default ChampionSearch;
