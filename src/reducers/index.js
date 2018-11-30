import { combineReducers } from 'redux';
import appData from './dataReducer';
import appLogin from './loginReducer';

const rootReducer = combineReducers({
    appData,
    appLogin
});

export default rootReducer;