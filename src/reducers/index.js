import { combineReducers } from 'redux';
import championSearch from './championSearch';
import championTags from './championTags';
import runtime from './runtime';

const reducers = combineReducers({
  championSearch,
  championTags,
  runtime,
});

export default reducers;
