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

const initialState = {
  users: [],
  isFetchingUsers: false,
  isAUser: false,
  isloggingIn: false,
  loggedIn: false,
  isfetchingInfo: false,
  userInfo: {},
  error: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_INFO_INIT:
      return {
        ...state,
        isFetchingInfo: true,
        error: ""
      };
    case GET_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        isFetchingInfo: false,
        userInfo: action.payload
      };
    case GET_PROFILE_INFO_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case GET_EMPLOYEES_INIT:
      return {
        ...state,
        isFetchingUsers: true,
        error: ""
      };
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        isFetchingUsers: false,
        users: action.payload
      };
    case GET_EMPLOYEES_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case LOGIN_INIT:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        loggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};
