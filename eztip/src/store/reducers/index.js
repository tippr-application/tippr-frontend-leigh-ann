import { paymentFormReducer } from "./paymentFormReducer";
import { userReducer } from './userReducer';
import { combineReducers } from "redux";

export default combineReducers({
  paymentFormReducer,
  userReducer
});