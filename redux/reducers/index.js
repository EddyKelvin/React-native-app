import { combineReducers } from 'redux';

import caseReducer from './caseReducer';
import authReducer from './authReducer';

export default combineReducers({
    case: caseReducer,
    auth: authReducer
})