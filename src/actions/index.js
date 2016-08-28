import {
  SET_CHAMPION_SEARCH,
  ADD_CHAMPION_TAG,
  REMOVE_CHAMPION_TAG,
} from '../constants/ActionTypes';

export const setChampionSearch = (term) => ({ type: SET_CHAMPION_SEARCH, term });
export const addChampionTag = (tag) => ({ type: ADD_CHAMPION_TAG, tag });
export const removeChampionTag = (tag) => ({ type: REMOVE_CHAMPION_TAG, tag });
