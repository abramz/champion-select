import { combineReducers } from 'redux';
import championSearch from './championSearch';
import championFilters from './championFilters';

const reducers = combineReducers({
  championSearch,
  championFilters,
});

export default reducers;
