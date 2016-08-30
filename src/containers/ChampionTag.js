import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addChampionTag, removeChampionTag } from '../actions';

function Checkbox({ checked, className, filter, onChange }) {
  const id = `champion-tag-${filter}`;

  return (
    <div className={className}>
      <input id={id} name={id} type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor={id}>{`  ${filter}`}</label>
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({ championTags }, { filter }) => ({
  /**
   * the checkbox is `checked` when the filter is active
   */
  checked: championTags.indexOf(filter) > -1,
  filter,
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
