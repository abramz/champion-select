import {
  ADD_CHAMPION_TAG,
  REMOVE_CHAMPION_TAG,
} from '../constants/ActionTypes';

/**
 * Add or remove tags to the champion filters
 * @param state - the currently active filters
 * @param type - the action type
 * @param tag - the tag to add to active filters
 * @returns {*} - currently active filters after handling the action
 */
const championTags = (state = [], { type, tag }) => {
  const newState = [].concat(state);
  const locationOfTag = newState.indexOf(tag);

  switch (type) {
    case ADD_CHAMPION_TAG:
      if (locationOfTag === -1) {
        newState.push(tag);
      }

      return newState;
    case REMOVE_CHAMPION_TAG:
      if (locationOfTag > -1) {
        newState.splice(locationOfTag, 1);
      }

      return newState;
    default:
      return state;
  }
};

export default championTags;
