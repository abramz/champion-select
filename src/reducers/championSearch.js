import { SET_CHAMPION_SEARCH } from '../constants/ActionTypes';

const championSearch = (state = '', action) => {
  switch (action.type) {
    case SET_CHAMPION_SEARCH:
      return action.term;
    default:
      return state;
  }
};

export default championSearch;
