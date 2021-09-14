import {CREATE_CASE, GET_ALL_CASES, GET_CASE, AUTH_SUCCESS} from './types';

export const createCaseAction = (data) => {
  return {type: CREATE_CASE, payload: data};
};

export const getCaseAction = (data) => {
  return {type: GET_CASE, payload: data};
};

export const getAllCaseAction = (data) => {
  return {type: GET_ALL_CASES, payload: data};
};

export const authSuccessAction = (data) => {
  return {type: AUTH_SUCCESS, payload: data};
};
