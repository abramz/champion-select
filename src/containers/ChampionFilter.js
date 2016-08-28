import { connect } from 'react-redux';
import {
  addChampionFilter,
  removeChampionFilter,
} from '../actions';
import { Checkbox } from 'react-bootstrap';

const mapStateToProps = ({ championFilters }, { filter }) => ({
  checked: championFilters.indexOf(filter) > -1,
});

const mapDispatchToProps = (dispatch, { filter }) => ({
  onChange(event) {
    if (event.target.checked) {
      dispatch(addChampionFilter(filter));
    } else {
      dispatch(removeChampionFilter(filter));
    }
  },
});

const ChampionFilter = connect(mapStateToProps, mapDispatchToProps)(Checkbox);

export default ChampionFilter;
