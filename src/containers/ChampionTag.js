import { connect } from 'react-redux';
import {
  addChampionTag,
  removeChampionTag,
} from '../actions';
import { Checkbox } from 'react-bootstrap';

const mapStateToProps = ({ championTags }, { filter }) => ({
  /**
   * the checkbox is `checked` when the filter is active
   */
  checked: championTags.indexOf(filter) > -1,
});

const mapDispatchToProps = (dispatch, { filter }) => ({
  /**
   * if the checkbox is `checked`, then we dispatch the addChampionTag action with the filter
   * otherwise we dispatch the removeChampionTag action with the filter
   * @param event
   */
  onChange(event) {
    if (event.target.checked) {
      dispatch(addChampionTag(filter));
    } else {
      dispatch(removeChampionTag(filter));
    }
  },
});

const ChampionFilter = connect(mapStateToProps, mapDispatchToProps)(Checkbox);

export default ChampionFilter;
