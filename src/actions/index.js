import {
  SET_CHAMPION_SEARCH,
  ADD_CHAMPION_FILTER,
  REMOVE_CHAMPION_FILTER,
} from '../constants/ActionTypes';

export const setChampionSearch = (term) => ({ type: SET_CHAMPION_SEARCH, term });
export const addChampionFilter = (tag) => ({ type: ADD_CHAMPION_FILTER, tag });
export const removeChampionFilter = (tag) => ({ type: REMOVE_CHAMPION_FILTER, tag });
