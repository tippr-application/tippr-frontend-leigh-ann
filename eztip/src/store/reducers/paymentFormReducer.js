import {
    SUBMIT_PAYMENT_INIT,
    SUBMIT_PAYMENT_SUCCESS,
    SUBMIT_PAYMENT_FAILURE
} from '../types';

const initialState = {
  isSubmittingPayment: false,
  paymentSubmitted: false,
  error: ""
};

export const paymentFormReducer = (state = initialState, action) => {
    switch(action.type) {
    case SUBMIT_PAYMENT_INIT:
      return {
        ...state,
        isSubmittingPayment: true
      };
      case SUBMIT_PAYMENT_SUCCESS:
      return {
        ...state,
        paymentSubmitted: true,
        isSubmittingPayment: false,
      };
      case SUBMIT_PAYMENT_FAILURE:
      return {
        ...state,
        isSubmittingPayment: false,
        error: action.payload
      };
        default:
        return state;
    }
}