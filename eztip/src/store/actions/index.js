import axios from "axios";
import {
  // GET_PROFILE_INFO_INIT,
  // GET_PROFILE_INFO_SUCCESS,
  // GET_PROFILE_INFO_FAILURE,
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
  CREATE_PROFILE_INFO_FAILURE
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

// export const getProfileById = id => dispatch => {
//   dispatch({ type: GET_PROFILE_INFO_INIT });
//   axios
//     .get(`https://eztip.herokuapp.com/workers/${id}`)
//     .then(res => {
//       console.log(res.data);
//       dispatch({ type: GET_PROFILE_INFO_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: GET_PROFILE_INFO_FAILURE, payload: err.data });
//     });
// };

export const login = loginInfo => dispatch => {
  dispatch({ type: LOGIN_INIT });
  axios
    .post('https://eztip.herokuapp.com/login', loginInfo)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.data }));
}

export const submitPayment = (id, payment) => dispatch => {
  dispatch({ type: SUBMIT_PAYMENT_INIT });
  axios
    .post(`https://eztip.herokuapp.com/tips/${id}`, payment)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}

export const createInfo = info => dispatch => {
  dispatch({ type: CREATE_PROFILE_INFO_INIT });
  axios
    .post(`https://eztip.herokuapp.com/workers`, info)
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err));
}

export const updateInfo = (id, info) => dispatch => {
  dispatch({ type: UPDATE_PROFILE_INFO_INIT });
  axios
    .put(`https://eztip.herokuapp.com/workers/${id}`, info)
    .then(res => {
      console.log("updateInfo", res);
      dispatch({ type: UPDATE_PROFILE_INFO_SUCCESS, payload: res })
    })
    .catch(err => {
      dispatch({ type: UPDATE_PROFILE_INFO_FAILURE, payload: err });
    });
}
