import { SET_CHAMPION_SEARCH } from '../constants/ActionTypes';

const championSearch = (state = '', { type, term }) => {
  switch (type) {
    case SET_CHAMPION_SEARCH:
      return term;
    default:
      return state;
  }
};

export default championSearch;
