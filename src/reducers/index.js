import { combineReducers } from 'redux';
import appData from './dataReducer';
import appLogin from './loginReducer';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
    appData,
    appLogin,
    booksReducer
});

export default rootReducer;