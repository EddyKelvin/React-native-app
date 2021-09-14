import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { APP_API } from 'react-native-dotenv'
// const URL = 'http://192.168.0.179:5000/api/v1';
const URL = 'https://cryptic-bayou-09186.herokuapp.com/api/v1';
const CASE_URL = `${URL}/case`;
import {createCaseAction, getAllCaseAction, getCaseAction} from './actions';

const headers = async () => ({
  authorization: `Bearer ${await AsyncStorage.getItem('token')}`
});

export const createCase = (data, success, fail) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${CASE_URL}/create`,
        headers: await headers(),
        data
      })

      if (res.status === 200) {
        dispatch(createCaseAction(res.data.data.case));
        // console.log(res.data);
        success();
      } else {
        fail();
      }
    } catch (err) {
      console.log(err);
      fail();
    }
  };
};

export const createCaseVictim = (data, id, success, fail) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${CASE_URL}/create/${id}/caseVictim`,
        headers: await headers(),
        data
      })

      if (res.status === 200) {
        // dispatch(createCaseAction(res.data.data.victim));
        // console.log(res.data.data.victim);
        success();
      } else {
        fail();
      }
    } catch (err) {
      console.log(err);
      fail();
    }
  };
};

export const createCaseSuspect = (data, id, success, fail) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${CASE_URL}/create/${id}/caseSuspect`,
        headers: await headers(),
        data
      })

      if (res.status === 200) {
        // dispatch(createCaseAction(res.data.data.suspect));
        // console.log(res.data.data.victim);
        success();
      } else {
        fail();
      }
    } catch (err) {
      console.log(err);
      fail();
    }
  };
};

export const createCaseWitness = (data, id, success, fail) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${CASE_URL}/create/${id}/caseWitness`,
        headers: await headers(),
        data
      })

      if (res.status === 200) {
        // dispatch(createCaseAction(res.data.data.suspect));
        // console.log(res.data.data.victim);
        success();
      } else {
        fail();
      }
    } catch (err) {
      console.log(err);
      fail();
    }
  };
};

export const createCaseEvidence = (data, id, success, fail) => {
  return async (dispatch) => {
    try {
      const data = new FormData();
      const res = await axios({
        method: 'PATCH',
        url: `${CASE_URL}/${id}/evidence`,
        headers: await headers(),
        data
      })

      if (res.status === 200) {
        // dispatch(createCaseAction(res.data.data.suspect));
        // console.log(res.data.data.victim);
        success();
      } else {
        fail();
      }
    } catch (err) {
      console.log(err);
      fail();
    }
  };
};

export const editCase = (data, id, success, fail) => {
  return async (dispatch) => {
    try {
      const res = await axios.patch(`${CASE_URL}/${id}/case`, data);
      // const req = await fetch(`${CASE_URL}/${id}/case`, {
      //   method: 'PATCH', // or 'PUT'
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      // const res = await req.json();

      if (res.status === 201) {
        dispatch(createCaseAction(res.data.data.case));
        success();
      } else {
        fail();
      }
    } catch (err) {
      console.log(err);
      fail();
    }
  };
};

export const getAllCases = (finish) => {
  return async (dispatch) => {
    try {
      // const req = await fetch(`${CASE_URL}`);
      // const res = await req.json();
      // if (res.status === 'success') {
      //   dispatch(getAllCaseAction(res.data.cases));
      // } else {
      //   fail();
      // }
        
      const res = await axios.get(`${CASE_URL}`);
      if (res.status === 200) {
        dispatch(getAllCaseAction(res.data.data.cases));
        // success();
      } else {
        fail();
      }
    } catch (err) {
      console.log(err);
    //   fail();
    } finally {
      finish();
    }
  };
};


export const getCase = (id, success, fail) => {
  console.log(id, "not here")
  return async (dispatch) => {
    try {
      const res = await axios({
        method: 'GET',
        url: `${CASE_URL}/${id}`,
        headers: await headers(),
      })
      // const res = await axios.get(`${CASE_URL}/${id}`);
        dispatch(getCaseAction(res.data.data.caseData));
        success();
    } catch (err) {
      console.log(err);
      fail();
    }
  };
};

export const contactUs = (data, success, fail) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${URL}/contact/create`,
        headers: await headers(),
        data
      })
      // const res = await axios.get(`${CASE_URL}/${id}`);
        // dispatch(getCaseAction(res.data.data.caseData));
        success();
    } catch (err) {
      console.log(err);
      fail();
    }
  };
};