import { combineReducers } from 'redux';
import championSearch from './championSearch';
import championTags from './championTags';
import runtime from './runtime';
import tabs from './tabs';

const reducers = combineReducers({
  championSearch,
  championTags,
  runtime,
  tabs,
});

export default reducers;
