import axios from "axios";
// import { } from "../types";

export const actionCreator = _ => dispatch => {
  dispatch({ type: VARIABLE_NAMES_STARTED });
  axios
    .get("")
    .then(res => {
      dispatch({ type: VARIABLE_NAMES_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: VARIABLE_NAMES_ERROR, payload: err });
    });
};