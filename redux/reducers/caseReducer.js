import {CREATE_CASE, GET_ALL_CASES, GET_CASE} from '../actions/types';

const initialState = {
  case: {},
  cases: [],
};

const caseReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CASE:
      return {
        ...state,
        case: action.payload,
      };
    case GET_ALL_CASES:
      return {
        ...state,
        cases: action.payload,
      };
    case GET_CASE:
      return {
        ...state,
        case: action.payload
      }
    default:
      return state;
  }
};

export default caseReducer;
