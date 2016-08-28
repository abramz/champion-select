import { SET_CHAMPION_SEARCH } from '../constants/ActionTypes';

/**
 * Set a search term for champions
 * @param state - the current search term
 * @param type - the action type
 * @param term - the new search term
 * @returns {*} - the new search term
 */
const championSearch = (state = '', { type, term }) => {
  switch (type) {
    case SET_CHAMPION_SEARCH:
      return term;
    default:
      return state;
  }
};

export default championSearch;
