import {
  GET_EMPLOYEES_INIT,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILURE,
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_PHOTO_INIT,
  UPDATE_PHOTO_SUCCESS,
  UPDATE_PHOTO_FAILURE
} from "../types";

const initialState = {
  users: [],
  isFetchingUsers: false,
  userType: "",
  isloggingIn: false,
  loggedIn: false,
  isfetchingInfo: false,
  userInfo: {},
  loggedInUsername: "",
  loggedInUserId: "",
  error: "",
  token: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_PROFILE_INFO_INIT:
    //   return {
    //     ...state,
    //     isFetchingInfo: true,
    //     error: ""
    //   };
    // case GET_PROFILE_INFO_SUCCESS:
    //   return {
    //     ...state,
    //     isFetchingInfo: false,
    //     userInfo: action.payload
    //   };
    // case GET_PROFILE_INFO_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload
    //   };
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
      }
    default:
      return state;
  }
};
