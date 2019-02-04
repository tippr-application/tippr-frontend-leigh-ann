import { paymentFormReducer } from "./paymentFormReducer";
import { loginReducer } from './loginReducer';
import { combineReducers } from "redux";

export default combineReducers({
  paymentFormReducer,
  loginReducer
});