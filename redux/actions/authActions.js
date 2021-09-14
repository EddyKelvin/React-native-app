import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import { APP_API } from 'react-native-dotenv'
const URL = 'https://cryptic-bayou-09186.herokuapp.com/api/v1';
// const URL = 'http://192.168.0.179:5000/api/v1';
const AUTH_URL = `${URL}/user`;
import {createCaseAction, getAllCaseAction, authSuccessAction} from './actions';

export const signupUser = (data, success, fail) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${AUTH_URL}/signup`, data);
      AsyncStorage.setItem("token", res.data.data.token);
      dispatch(authSuccessAction(res.data.data.user));
      success();
    } catch (err) {
      console.log(err.response);
      fail();
    }
  };
};

export const signinUser = (data, success, fail) => {
  console.log(data)
  return async (dispatch) => {
    try {
      const res = await axios.post(`${AUTH_URL}/login`, data);
      AsyncStorage.setItem("token", res.data.data.token);
      dispatch(authSuccessAction(res.data.data.user));
      success();
    } catch (err) {
      console.log(err.response.data);
      fail();
    }
  };
};
