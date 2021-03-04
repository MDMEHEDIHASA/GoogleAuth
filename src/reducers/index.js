import {combineReducers} from 'redux';

import {reducer as formReducer} from 'redux-form';

import authReducers from '../reducers/authReducers';

export default combineReducers({
    authReducers:authReducers,
    form:formReducer
})