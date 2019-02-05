import axios from "axios";
import {
  GET_PROFILE_INFO_INIT,
  GET_PROFILE_INFO_SUCCESS,
  GET_PROFILE_INFO_FAILURE,
  GET_EMPLOYEES_INIT,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILURE,
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../types";

export const getEmployees = () => dispatch => {
  dispatch({ type: GET_EMPLOYEES_INIT });
  const userToken = localStorage.getItem("token");
  const reqOptions = { headers: {authorization: userToken }}
  axios
    .get(`https://eztip.herokuapp.com/workers`, reqOptions)
    .then(res => {
      dispatch({ type: GET_EMPLOYEES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_EMPLOYEES_FAILURE, payload: err });
    });
};

export const getProfileById = id => dispatch => {
  dispatch({ type: GET_PROFILE_INFO_INIT });
  axios
    .get(`https://eztip.herokuapp.com/workers/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_PROFILE_INFO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_PROFILE_INFO_FAILURE, payload: err.data });
    });
};

export const login = loginInfo => dispatch => {
  dispatch({ type: LOGIN_INIT });
  // const token = localStorage.getItem("token");
  // const reqOptions = { headers: { authorization: token } };
  axios
    .post('https://eztip.herokuapp.com/login', loginInfo)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.data }));
}
