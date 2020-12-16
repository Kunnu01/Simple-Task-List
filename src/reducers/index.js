import { combineReducers } from 'redux';
import { tinyList } from './lists';

const rootReducer = combineReducers({
  tinyList,
});

export { rootReducer }
