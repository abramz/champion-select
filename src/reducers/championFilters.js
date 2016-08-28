import {
  ADD_CHAMPION_FILTER,
  REMOVE_CHAMPION_FILTER,
} from '../constants/ActionTypes';

/**
 * Add or remove tags to the champion filters
 * @param state - the currently filtered tags
 * @param action - the action representing an added or removed filter
 * @returns {Array}
 */
const championFilters = (state = [], action) => {
  const newState = [].concat(state);
  const locationOfTag = newState.indexOf(action.tag);

  switch (action.type) {
    case ADD_CHAMPION_FILTER:
      if (locationOfTag === -1) {
        newState.push(action.tag);
      }

      return newState;
    case REMOVE_CHAMPION_FILTER:
      if (locationOfTag > -1) {
        newState.splice(locationOfTag, 1);
      }

      return newState;
    default:
      return state;
  }
};

export default championFilters;
