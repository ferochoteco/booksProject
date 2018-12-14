import { combineReducers } from 'redux';

import appData from './dataReducer';
import appLogin from './loginReducer';
import booksReducer from './booksReducer';
import playersReducer from './playersReducer';

const rootReducer = combineReducers({
    appData,
    appLogin,
    booksReducer,
    playersReducer
});

export default rootReducer;