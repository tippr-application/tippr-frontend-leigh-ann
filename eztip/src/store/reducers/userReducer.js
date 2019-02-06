import {
  GET_EMPLOYEES_INIT,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILURE,
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_PHOTO_INIT,
  UPDATE_PHOTO_SUCCESS,
  UPDATE_PHOTO_FAILURE,
  REGISTER_INIT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  CREATE_PROFILE_INFO_FAILURE,
  CREATE_PROFILE_INFO_INIT,
  CREATE_PROFILE_INFO_SUCCESS
} from "../types";

const initialState = {
  users: [],
  isFetchingUsers: false,
  userType: "",
  isloggingIn: false,
  loggedIn: false,
  isfetchingInfo: false,
  isRegisteringUser: false,
  registeredUsername: "",
  registeredUserId: null,
  userRegistered: false,
  isCreatingProfile: false,
  profileCreated: false,
  isUpdatingProfile: false,
  profileUpdated: false,
  userInfo: {},
  loggedInUsername: "",
  loggedInUserId: "",
  error: "",
  token: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_INIT:
      return {
        ...state,
        isFetchingUsers: true,
        error: ""
      };
    case GET_EMPLOYEES_SUCCESS:
    console.log(action.payload);
    const userInfo = action.payload
        .filter(user => user.username === state.loggedInUsername)
        .pop();
        console.log(userInfo);
      return {
        ...state,
        isFetchingUsers: false,
        users: action.payload,
        userInfo: userInfo
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
        error: "",
        userType: ""
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLoggingIn: false,
        loggedIn: true,
        userType: action.payload.user_type,
        token: action.payload.token,
        loggedInUsername: action.payload.username,
        loggedInUserId: action.payload.userId
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
      };
      case UPDATE_PHOTO_INIT:
      return {
        ...state,
        error: ""
      }
      case UPDATE_PHOTO_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
      case UPDATE_PHOTO_FAILURE:
      return {
        ...state,
        error: action.payload
      };
      case REGISTER_INIT:
      return {
        ...state,
        isRegisteringUser: true,
        error: ""
      };
      case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isRegisteringUser: false,
        userRegistered: true,
        registeredUsername: action.payload.username,
        registeredUserId: action.payload.userId
      };
      case REGISTER_FAILURE:
      return {
        ...state,
        isRegisteringUser: false,
        error: action.payload
      };
      case CREATE_PROFILE_INFO_INIT:
      return {
        ...state,
        isCreatingProfile: true,
        error: ""
      }
      case CREATE_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        isCreatingProfile: false,
        profileCreated: true
      };
      case CREATE_PROFILE_INFO_FAILURE:
      return {
        ...state,
        isCreatingProfile: false,
        error: action.payload
      }
    default:
      return state;
  }
};
