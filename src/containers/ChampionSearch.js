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
  onChange(event) {
    console.log(event.target.value);
    dispatch(setChampionSearch(event.target.value));
  },
});

const ChampionSearch = connect(mapStateToProps, mapDispatchToProps)(FormControl);

export default ChampionSearch;
