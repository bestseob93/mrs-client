import { combineReducers } from 'redux';
import * as reducers from '../ducks';

console.log('리듀서 index.js');
console.log(reducers);
const rootReducer = combineReducers(reducers);

export default rootReducer;
