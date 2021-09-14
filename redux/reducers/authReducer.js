import {AUTH_LOADING, AUTH_SUCCESS, AUTH_FAIL} from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
    isAuthenticated: false,
    error: null,
    loading: false,
    auth: null
  };

const caseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      console.log("here", action.payload)
      return { ...state, loading: false, auth: action.payload, isAuthenticated: !_.isEmpty(action.payload) };
    case AUTH_FAIL:
      return { ...state, loading: false, error: payload.err };
    default:
      return state;
  }
};

export default caseReducer;
