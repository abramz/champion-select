import { combineReducers } from 'redux';
import championSearch from './championSearch';
import championTags from './championTags';

const reducers = combineReducers({
  championSearch,
  championTags,
});

export default reducers;
