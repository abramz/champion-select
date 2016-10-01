import { CHANGE_SELECTED_TAB } from '../constants/ActionTypes';

/**
 * Set the selected tab for the id
 * @param state - the previously selected tab
 * @param type - the action type
 * @param index - the index of the newly selected tab
 * @returns {*} - the updated state
 */
const tabs = (state = 0, { type, index }) => {
  switch (type) {
    case CHANGE_SELECTED_TAB:
      return index;
    default:
      return state;
  }
};

export default tabs;
