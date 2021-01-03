import { combineReducers } from 'redux';
import city from './city';
import user from './user';
import collect from './collect';

export default combineReducers({
    city,
    user,
    collect
});