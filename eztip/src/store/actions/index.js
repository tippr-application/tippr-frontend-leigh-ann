import axios from "axios";
import {
  GET_EMPLOYEES_INIT,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILURE,
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SUBMIT_PAYMENT_INIT,
  SUBMIT_PAYMENT_SUCCESS,
  SUBMIT_PAYMENT_FAILURE,
  UPDATE_PROFILE_INFO_INIT,
  UPDATE_PROFILE_INFO_SUCCESS,
  UPDATE_PROFILE_INFO_FAILURE,
  CREATE_PROFILE_INFO_INIT,
  CREATE_PROFILE_INFO_SUCCESS,
  CREATE_PROFILE_INFO_FAILURE,
  UPDATE_PHOTO_INIT,
  UPDATE_PHOTO_SUCCESS,
  UPDATE_PHOTO_FAILURE,
  REGISTER_INIT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT
} from "../types";

export const getEmployees = () => dispatch => {
  dispatch({ type: GET_EMPLOYEES_INIT });
  const userToken = localStorage.getItem("token");
  const reqOptions = { headers: { authorization: userToken } };
  axios
    .get(`https://eztip.herokuapp.com/workers`, reqOptions)
    .then(res => {
      dispatch({ type: GET_EMPLOYEES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_EMPLOYEES_FAILURE, payload: err });
    });
};

export const login = loginInfo => dispatch => {
  dispatch({ type: LOGIN_INIT });
  axios
    .post("https://eztip.herokuapp.com/login", loginInfo)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.data }));
};

export const logout = () => {
 return {
   type: LOGOUT
 }
}

export const submitPayment = info => dispatch => {
  dispatch({ type: SUBMIT_PAYMENT_INIT });
  const userToken = localStorage.getItem("token");
  const reqOptions = { headers: { authorization: userToken } };
  axios
    .post(`https://eztip.herokuapp.com/tips/`, info, reqOptions)
    .then(res => {
      dispatch({ type: SUBMIT_PAYMENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SUBMIT_PAYMENT_FAILURE, payload: err });
    });
};

export const createInfo = info => dispatch => {
  dispatch({ type: CREATE_PROFILE_INFO_INIT });
  const userToken = localStorage.getItem("token");
  const reqOptions = { headers: { authorization: userToken } };
  axios
    .post(`https://eztip.herokuapp.com/workers`, info, reqOptions)
    .then(res => {
      dispatch({ type: CREATE_PROFILE_INFO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_PROFILE_INFO_FAILURE, payload: err });
    });
};

export const updateInfo = (id, info) => dispatch => {
  dispatch({ type: UPDATE_PROFILE_INFO_INIT });
  const userToken = localStorage.getItem("token");
  const reqOptions = { headers: { authorization: userToken } };
  axios
    .put(`https://eztip.herokuapp.com/workers/${id}`, info, reqOptions)
    .then(res => {
      dispatch({ type: UPDATE_PROFILE_INFO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_PROFILE_INFO_FAILURE, payload: err });
    });
};

export const updateProfilePhoto = (id, fd) => dispatch => {
  dispatch({ type: UPDATE_PHOTO_INIT });
  const userToken = localStorage.getItem("token");
  const reqOptions = { headers: { authorization: userToken } };
  axios
    .post(`https://eztip.herokuapp.com/workers/${id}/upload`, fd, reqOptions)
    .then(res => {
      dispatch({ type: UPDATE_PHOTO_SUCCESS, payload: res.data.data.imgUrl });
    })
    .catch(err => dispatch({ type: UPDATE_PHOTO_FAILURE, payload: err.data }));
};

export const registerUser = info => dispatch => {
  dispatch({ type: REGISTER_INIT });
  axios
    .post("https://eztip.herokuapp.com/register", info)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    })
      .catch(err=> dispatch({ type: REGISTER_FAILURE, payload: err}));
}