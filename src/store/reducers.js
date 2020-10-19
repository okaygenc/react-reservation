import {combineReducers} from 'redux';

import dateReducer from '../reducers/dateReducer'
import roomReducer from '../reducers/roomReducer'

export default combineReducers({
  dateReducer,
  roomReducer
});
