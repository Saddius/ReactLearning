import { combineReducers } from 'redux';
import { films, itemsHasErrored, word } from './items';

export default combineReducers({
    films,
    itemsHasErrored,
    word
});