import axios from "axios";
import {
  GET_PROFILE_INFO_INIT,
  GET_PROFILE_INFO_SUCCESS,
  GET_PROFILE_INFO_FAILURE
} from "../types";

// Employee Action Creators

export const getProfileById = id => dispatch => {
  dispatch({ type: GET_PROFILE_INFO_INIT });
  axios
    .get(`https://eztip.herokuapp.com/workers/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_PROFILE_INFO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_PROFILE_INFO_FAILURE, payload: err });
    });
};
